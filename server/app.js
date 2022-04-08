const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const climbServer = require("./climb-server");

const port = process.env.PORT || 3001;
//const index = require("./routes/index");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origins: "*:*",
    methods: ["GET", "POST"],
    allowedHeaders: ["content-type"],
    pingTimeout: 7000,
    pingInterval: 3000,
  },
});

/*** FUNCTIONS */

const emitRoom = (roomId, event, params) => {
  const room = climbServer.findRoom(roomId);

  console.log("EMIT EVENT " + event + " to room " + roomId);

  room?.players.forEach((player) => {
    io.to(player.id).emit(event, ...params);
  });
};

const refreshPlayers = (roomId) => {
  //io.to(roomId).emit("refresh_players", climbServer.getPlayers(roomId));
  let players = climbServer.getPlayers(roomId);
  emitRoom(roomId, "refresh_players", [players]);
};

const sendPlayersInfo = (roomId) => {
  //io.to(roomId).emit("refresh_players", climbServer.getPlayers(roomId));
  climbServer.getPlayers(roomId).forEach((player) => {
    io.to(player.id).emit("send_player_info", player);
  });
};

const updateIngredients = (roomId) => {
  const room = climbServer.findRoom(roomId);

  // Calcul de l'évolution des ingrédients
  Object.values(room.ingredients).forEach((ingredient) =>
    ingredient.getEvolution()
  );

  emitRoom(roomId, "update_ingredients", [room.ingredients]);
};

/* CONNEXION */

io.on("connection", (socket) => {
  console.log(`User connected : ${socket.id}`);

  socket.on("create_room", (hostName) => {
    const room = climbServer.createGame(socket.id, hostName);
    if (room === undefined || room === null) {
      return;
    }
    socket.join(room.getId());
    socket.emit("room_joined", room, socket.id);
  });

  socket.on("join_room", (roomId, playerName) => {
    const room = climbServer.findRoom(roomId);
    if (room === undefined || room === null) {
      socket.emit("not_find_room");
    } else {
      socket.join(roomId);
      climbServer.joinRoom(roomId, socket.id, playerName);
      socket.emit("room_joined", room, socket.id);
      console.log(socket.id + " (JOIGNED) now in rooms ", socket.rooms);
      refreshPlayers(roomId);
    }
  });

  socket.on("leave_room", (roomId, playerId) => {
    console.log(playerId + " leaving " + roomId);
    climbServer.leaveRoom(roomId, playerId);
    refreshPlayers(roomId);
  });

  socket.on("start_game", (roomId, probaEvent, nbRounds) => {
    //Condition à faire : Si tout les joueurs sont prêt
    climbServer.startGame(roomId, probaEvent, nbRounds);
    const room = climbServer.findRoom(roomId);
    if (room === undefined || room === null) {
      return;
    }

    console.log("Launch game : " + roomId);
    emitRoom(roomId, "game_started", [room]);
    //emitRoom(roomId, "new_news", [room.news]);
    updateIngredients(roomId);
    refreshPlayers(roomId);
    sendPlayersInfo(roomId);
  });

  socket.on("end_day", (data, roomId, player) => {
    //Condition à faire : Si tout les joueurs sont prêt
    climbServer.setReady(roomId, player.id);
    climbServer.sellingDay(data, roomId, player.id);
    let room = climbServer.findRoom(roomId);
    room.nextDay();

    console.log(room.roundNumber + " / " + room.nbRounds);

    //Si tout les joueurs sont prêt
    let allReady = climbServer.allReady(roomId);
    if (allReady) {
      setTimeout(() => {
        refreshPlayers(roomId);
        sendPlayersInfo(roomId);
        if (room.nbRounds <= room.roundNumber) {
          emitRoom(roomId, "end_game", [room]);
        } else {
          emitRoom(roomId, "next_day", [room.roundNumber]);
          emitRoom(roomId, "end_day", [room.roundNumber]);
          let getNews = climbServer.pickNews(roomId);
          if (getNews) {
            emitRoom(roomId, "new_news", [room.news]);
          }
          updateIngredients(roomId);
          climbServer.setAllReady(roomId, false);
        }
      }, 3000);
    }
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected : ${socket.id}`);
  });
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});
