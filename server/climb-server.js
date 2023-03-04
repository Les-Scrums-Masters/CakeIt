import Room from './models/room.js'
import Baker from './models/baker.js'

let climbServer = { rooms: [] };

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
  climbServer.getPlayers(roomId)?.forEach((player) => {
    if (player.id == playerId) {
      player.setReady(true);
    }
  });
};

climbServer.setAllReady = (roomId, value) => {
  climbServer.getPlayers(roomId)?.forEach((player) => {
    player.setReady(value);
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
  if (room === undefined || room === null) {
    return;
  }
  room?.addPlayer(playerSocket, playerName);
};

climbServer.startGame = (roomId, probaEvent, nbRounds) => {
  let room = climbServer.findRoom(roomId);
  if (room === undefined || room === null) {
    return;
  }
  if (room?.getPlayers().length >= 1) {
    room.startGame();
    room.setProba(probaEvent);
    room.setNbRounds(nbRounds);
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
  let room = climbServer.findRoom(roomId);
  if (room === undefined || room === null) {
    return;
  }
  if (prob < room.probaEvent) {
    let news = room.getNews();
    news.date = room.roundNumber;
    room.news.push(news);

    room.updateIngredientPrices(news.multipliers);
    return true;
  } else {
    room.updateIngredientPrices({
      egg: 1.0,
      chocolate: 1.0,
      flour: 1.0,
      sugar: 1.0,
      butter: 1.0,
    });
    return false;
  }
};

climbServer.getRandomCode = () => {
  let code = 1000 + Math.floor(Math.random() * 8999);
  while (climbServer.codeExist(code)) {
    code = climbServer.getRandomCode();
  }
  return code;
};

climbServer.sellingDay = (data, roomId, playerId) => {
  let room = climbServer.findRoom(roomId);
  if (room === undefined || room === null) {
    return;
  }
  let cakePrice = 0;
  if (room.ingredients != null) {
    Object.values(room.ingredients).forEach((ingredient) => {
      cakePrice += ingredient.price.get();
    });
    climbServer.getPlayers(roomId)?.forEach((player) => {
      if (player === null || player === undefined) {
        return;
      }
      if (player.id == playerId) {
        //sales : nb d'articles vendus
        let sales = 0;

        if (data.price <= cakePrice + 1) sales = 1000;
        else if (data.price <= cakePrice + 2) sales = 800;
        else if (data.price <= cakePrice + 3) sales = 600;
        else if (data.price <= cakePrice + 4) sales = 400;
        else if (data.price <= cakePrice + 5) sales = 200;
        else sales = 100;

        if (sales > data.production) sales = data.production;

        let profit =
          sales * data.price - data.production * cakePrice + Baker.FIXED_COST;
        player.newDay(
          parseFloat(data.price),
          parseInt(data.production),
          sales,
          profit,
          player.money.get() + profit
        );
      }
    });
  }
};


climbServer.getPlayers = (roomId) => {
  let room = climbServer.findRoom(roomId);
  room?.players.forEach((player) => player.generateEvolution());
  return room?.players;
};

export default climbServer

