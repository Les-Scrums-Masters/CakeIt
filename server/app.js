const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const port = process.env.PORT || 4001;
//const index = require("./routes/index");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: `http://localhost:${port}`,
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected`);
  });
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});
