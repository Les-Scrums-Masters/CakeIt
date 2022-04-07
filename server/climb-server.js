const Room = require("./models/room.js");
const Ingredient = require("./models/ingredient.js");

const climbServer = { rooms: [] };

climbServer.createGame = (hostSocket, hostParticipant) => {
  // Create a new game instance
  //const Room = RoomFactory(io);
  const newRoom = new Room(
    hostSocket,
    hostParticipant,
    climbServer.getRandomCode()
  );
  console.log("New game object created", newRoom);

  // Store it in the list of game
  climbServer.rooms.push(newRoom);

  return newRoom;
};

climbServer.findRoom = (roomId) => {
  for (let i = 0; i < climbServer.rooms.length; i++) {
    if (climbServer.rooms[i].getId() == roomId) {
      return climbServer.rooms[i];
    }
  }
  console.log("room INEXISTANTE !! " + roomId);
  return null;
};

climbServer.setReady = (roomId, playerId) => {
  climbServer.getPlayers(roomId).forEach((player) => {
    if (player.id == playerId) {
      player.setReady(true);
    }
  });
};

climbServer.allReady = (roomId) => {
  let count = 0;
  climbServer.getPlayers(roomId)?.forEach((player) => {
    console.log(player.ready);
    if (player.ready == true) {
      count++;
    }
  });
  if (count === climbServer.getPlayers(roomId)?.length) {
    return true;
  } else {
    return false;
  }
};

climbServer.joinRoom = (roomId, playerSocket, playerName) => {
  let room = climbServer.findRoom(roomId);
  room.addPlayer(playerSocket, playerName);
};

climbServer.startGame = (roomId) => {
  let room = climbServer.findRoom(roomId);
  if (room?.getPlayers().length >= 1) {
    room.startGame();
    return true;
  }
  return false;
};

climbServer.leaveRoom = (roomId, playerId) => {
  let room = climbServer.findRoom(roomId);
  console.log("Searching " + roomId);
  room?.removePlayer(playerId);
};

climbServer.codeExist = (code) => {
  for (let i = 0; i < climbServer.rooms.length; i++) {
    if (climbServer.rooms[i].getId() === code) {
      return true;
    }
  }
  return false;
};

climbServer.pickNews = (roomId) => {
  let prob = Math.floor(Math.random() * 100);
  console.log(prob);
  if (prob > 1) {
    let room = climbServer.findRoom(roomId);
    let number = Math.floor(Math.random() * room.remainingNews.length);
    let news = room.getNews(number);
    room.news.push(news);
    console.log(room);
  }
};

climbServer.getRandomCode = () => {
  code = 1000 + Math.floor(Math.random() * 8999);
  while (climbServer.codeExist(code)) {
    code = climbServer.getRandomCode();
  }
  return code;
};

climbServer.sellingDay = (data, roomId, playerId) => {
  let room = climbServer.findRoom(roomId);
  let cakePrice = 0;
  Object.values(room.ingredients).forEach((ingredient) => {
    cakePrice += ingredient.price.get();
  });
  climbServer.getPlayers(roomId)?.forEach((player) => {
    if (player.id == playerId) {
      let sales = 1000 / data.price;
      let profit = sales * data.price - data.production * cakePrice;
      player.newDay(
        parseFloat(data.price),
        parseInt(data.production),
        sales,
        profit,
        player.money.get() + profit
      );
      console.log(player);
      console.log(player.price);
      console.log(player.volume);
      console.log(player.money);
      console.log(player.sales);
      console.log(player.profit);
    }
  });
};

module.exports = climbServer;

climbServer.getPlayers = (roomId) => {
  let room = climbServer.findRoom(roomId);
  room?.players.forEach((player) => player.generateEvolution());
  return room?.players;
};
