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

let sockets = [];

io.on("connection", (socket) => {
  sockets.push(socket);
  console.log(`User connected : ${socket.id}`);
  console.log(sockets.length);

  socket.on("create_room", (hostName) => {
    const room = climbServer.createGame(socket.id, hostName);
    socket.join(room.getId());
    socket.emit("room_joined", room);
    console.log(`User (${socket.id}) created room : ${room.getId()}`);
  });

  socket.on("join_room", (roomId, playerName) => {
    const room = climbServer.findRoom(roomId);
    if (room === undefined) {
      socket.emit("not_find_room");
    } else {
      socket.join(roomId);
      climbServer.joinRoom(roomId, socket.id, playerName);
      socket.emit("room_joined", room);
      socket.to(roomId).emit("refresh_player", room.players);

      console.log(`User (${socket.id}) joined room : ${roomId}`);
    }
    const newroom = climbServer.findRoom(roomId);
    console.log(newroom);
  });

  socket.on("start_game", (data) => {
    //Condition à faire : Si tout les joueurs sont prêt
    climbServer.startGame(roomId);
    socket.to(data.room.getId()).emit("game_started", data);
  });

  socket.on("end_day", (data) => {
    //Condition à faire : Si tout les joueurs sont prêt
    socket.to(data.room.getId()).emit("next_day", data);
  });

  socket.on("quit_game", (roomId, playerId) => {
    climbServer.quitRoom(roomId, playerId);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected : ${socket.id}`);
  });
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});
