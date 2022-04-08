const HistoryValue = require("./historyValue.js");

class Ingredient {
  static INITIAL_PRICE_EGG = 1.0;
  static INITIAL_PRICE_CHOCOLATE = 2.0;
  static INITIAL_PRICE_SUGAR = 0.5;
  static INITIAL_PRICE_BUTTER = 1.0;
  static INITIAL_PRICE_FLOUR = 0.7;

  constructor(name, price) {
    this.name = name;
    this.price = new HistoryValue(price);
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price.get();
  }

  getEvolution() {
    this.priceEvolution = this.price.getEvolution();
  }
}

module.exports = Ingredient;
