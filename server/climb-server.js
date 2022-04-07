const RoomFactory = require("./models/room.js");

const climbServer = { rooms: {}, roomCount: 0 };

climbServer.createGame = (io, hostParticipant) => {
  // Create a new game instance
  const Room = RoomFactory(io);
  const newRoom = new Room(hostParticipant, climbServer.getRandomCode());
  console.log("New game object created", newGame);

  // Store it in the list of game
  climbServer.games.push(newRoom);

  // Keep track
  climbServer.roomCount += 1;

  return newRoom;
};

climbServer.findGame = (roomId) => {
  climbServer.rooms.forEach((room, index) => {
    if (room.getId() === roomId) {
      return climbServer.rooms[index];
    }
  });
};

climbServer.getRandomCode = () => {
  code = 1000 + Math.floor(Math.random() * 8999);
  climbServer.rooms.forEach((room) => {
    if (room.getId() === code) {
      code = climbServer.getRandomCode();
    }
  });
  return code;
};

module.exports = climbServer;
