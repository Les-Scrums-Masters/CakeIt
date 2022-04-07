const Room = require("./models/room.js");

const climbServer = { rooms: [], roomCount: 0 };

climbServer.createGame = (io, hostParticipant) => {
  // Create a new game instance
  //const Room = RoomFactory(io);
  const newRoom = new Room(hostParticipant, climbServer.getRandomCode());
  console.log("New game object created", newRoom);

  // Store it in the list of game
  climbServer.rooms.push(newRoom);

  // Keep track
  climbServer.roomCount += 1;

  return newRoom;
};

climbServer.findRoom = (roomId) => {
  console.log(climbServer.rooms);
  for (let i = 0; i < climbServer.rooms.length; i++) {
    if (climbServer.rooms[i].getId() == roomId) {
      return climbServer.rooms[i];
    }
  }
};

climbServer.joinRoom = (roomId, playerSocket, playerName) => {
  let room = climbServer.findRoom(roomId);
  room.addPlayer(playerSocket, playerName);
};

climbServer.startGame = (roomId) => {
  let room = climbServer.findRoom(roomId);
  if (room?.getPlayers().length >= 2) {
    room.startGame();
    return true;
  }
  return false;
};

climbServer.codeExist = (code) => {
  for (let i = 0; i < climbServer.rooms.length; i++) {
    if (climbServer.rooms[i].getId() === code) {
      return true
    }
  }
  return false
}

climbServer.getRandomCode = () => {
  code = 1000 + Math.floor(Math.random() * 8999);
  while(this.codeExist(code)) {code=this.getRandomCode()}
  return code;
};

module.exports = climbServer;
