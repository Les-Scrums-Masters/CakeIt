const Baker = require("./baker.js");
const Ingredient = require("./ingredient.js");

class Room {
  constructor(hostSocket, hostName, roomCode) {
    this.players = [new Baker(hostSocket, hostName)];
    this.roomCode = roomCode;
    this.roundNumber = 1;
    this.ingredients = {
      egg: new Ingredient("egg", Ingredient.INITIAL_PRICE_EGG),
      chocolate: new Ingredient(
        "chocolate",
        Ingredient.INITIAL_PRICE_CHOCOLATE
      ),
      sugar: new Ingredient("sugar", Ingredient.INITIAL_PRICE_SUGAR),
      butter: new Ingredient("butter", Ingredient.INITIAL_PRICE_BUTTER),
      flour: new Ingredient("flour", Ingredient.INITIAL_PRICE_FLOUR),
    };
    this.news = [];
  }

  addPlayer(id, name) {
    this.players.push(new Baker(id, name));
  }

  removePlayer(id) {
    this.players.forEach((player, index) => {
      if (player.getId() == id) {
        this.players.splice(index, 1);
      }
    });
  }

  getId() {
    return this.roomCode;
  }

  getIngredients() {}

  getPlayers() {
    return this.players;
  }

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

  startGame() {
    this.roundNumber = 1;
  }

  nextDay() {}
}

module.exports = Room;
