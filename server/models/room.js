const Baker = require("./baker.js");

class Room {
  constructor(firstPlayer, roomCode) {
    this.players = [];
    addPlayer(firstPlayer);
    this.roomCode = roomCode;
    this.roundNumber = 0;
  }

  addPlayer(name) {
    this.players.push(new Baker(getRandomCode(), name));
  }

  getRandomCode() {
    code = 1000 + Math.floor(Math.random() * 8999);
    this.players.forEach((player) => {
      if (player.getId() === code) {
        code = getRandomCode();
      }
    });
    return code;
  }

  removePlayer(id) {
    this.players.forEach((player, index) => {
      if (player.getId() === id) {
        this.player.splice(index, 1);
      }
    });
  }

  getRoomCode() {
    return this.roomCode;
  }

  getIngredients() {}

  getPlayer(id) {
    this.players.forEach((player, index) => {
      if (player.getId() === id) {
        return this.player[index];
      }
    });
    return null;
  }

  getRound() {
    return this.roundNumber;
  }

  startGame() {}

  nextDay() {}
}
