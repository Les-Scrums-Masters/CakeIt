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

io.on("connection", (socket) => {
  console.log(`User connected : ${socket.id}`);

  socket.on("create_room", (hostParticipant) => {
    const room = climbServer.createGame(io, hostParticipant);
    socket.join(room.getId());
    socket.emit("room_joined", room);
    console.log(`User (${socket.id}) created room : ${room.getId()}`);
  });

  socket.on("join_room", (roomId) => {
    const room = climbServer.find(roomId);
    if (room === null) {
      socket.emit("not_find_room");
    } else {
      socket.join(roomId);
      socket.emit("room_joined", climbServer.find(roomId));
      console.log(`User (${socket.id}) joined room : ${room.id}`);
    }
  });

  socket.on("end_day", (data) => {
    //Condition à faire : Si tout les joueurs sont prêt
    socket.to(data.room.getId()).emit("next_day", data);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected : ${socket.id}`);
  });
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});
