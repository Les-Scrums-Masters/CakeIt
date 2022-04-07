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
    climbServer.createGame(io, hostParticipant);
    console.log(`User (${hostParticipant.id}) created room : ${room}`);
  });

  socket.on("join_room", (roomId) => {
    const room = climbServer.find(roomId);
    if (room === null) {
      socket.emit("not_find_room");
    } else {
      socket.join(roomId);
      console.log(`User (${socket.id}) joined room : ${room.id}`);
    }
  });

  socket.on("end_day", (data) => {
    socket.to(data.room).emit("next_day", data);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected : ${socket.id}`);
  });
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});
