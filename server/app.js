const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const climbServer = require("./climb-server");

const port = 3001;
//const index = require("./routes/index");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: `http://localhost:3000`,
    method: ["GET", "POST"],
  },
});

/*** FUNCTIONS */

const emitRoom = (roomId, event, params) => {
  const room = climbServer.findRoom(roomId);
  const socketId = room.creatorId;

  console.log("EMIT EVENT " + event);

  io.to(roomId).emit(event, ...params);
  io.to(socketId).emit(event, ...params);
};

const refreshPlayers = (roomId) => {
  //io.to(roomId).emit("refresh_players", climbServer.getPlayers(roomId));
  emitRoom(roomId, "refresh_players", [climbServer.getPlayers(roomId)]);
};

/* CONNEXION */

io.on("connection", (socket) => {
  console.log(`User connected : ${socket.id}`);

  socket.on("create_room", (hostName) => {
    const room = climbServer.createGame(socket.id, hostName);
    socket.join(room.getId());
    console.log(socket.id + " (CREATED) now in rooms ", socket.rooms);
    socket.emit("room_joined", room, socket.id);
  });

  socket.on("join_room", (roomId, playerName) => {
    const room = climbServer.findRoom(roomId);
    if (room === undefined) {
      socket.emit("not_find_room");
    } else {
      socket.join(roomId);
      climbServer.joinRoom(roomId, socket.id, playerName);
      socket.emit("room_joined", room, socket.id);
      console.log(socket.id + " (JOIGNED) now in rooms ", socket.rooms);
      refreshPlayers(roomId);
    }
    const newroom = climbServer.findRoom(roomId);
    console.log(newroom);
  });

  socket.on("leave_room", (roomId, playerId) => {
    climbServer.leaveRoom(roomId, playerId);
    refreshPlayers(roomId);
  });

  socket.on("start_game", (roomId) => {
    //Condition à faire : Si tout les joueurs sont prêt
    climbServer.startGame(roomId);
    io.to(roomId).emit("game_started", roomId);
  });

  socket.on("end_day", (data) => {
    //Condition à faire : Si tout les joueurs sont prêt
    io.to(data.room.getId()).emit("next_day", data);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected : ${socket.id}`);
  });
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});
