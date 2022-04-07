const Baker = require("./baker.js");
const Ingredient = require("./ingredient.js");

class Room {
  constructor(hostname, roomCode) {
    this.players = [
      new Baker(1000 + Math.floor(Math.random() * 8999), hostname),
    ];
    this.roomCode = roomCode;
    this.roundNumber = 0;
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

  getId() {
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

module.exports = Room;
