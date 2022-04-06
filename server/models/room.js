import Baker from "./baker.js";

class Room {
  constructor(firstPlayer, roomCode) {
    this.players = [];
    addPlayer(firstPlayer);
    this.roomCode = roomCode; //Ask to server
    this.roundNumber = 0;
  }

  addPlayer(name) {
    this.players.push(new Baker(getRandomCode(), name));
  }

  getRandomCode() {
    code = Math.floor(Math.random() * 100000);
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
