const HistoryValue = require("./historyValue.js");

class Ingredient {
  static INITIAL_PRICE_EGG = 10.0;
  static INITIAL_PRICE_CHOCOLATE = 10.0;
  static INITIAL_PRICE_SUGAR = 10.0;
  static INITIAL_PRICE_BUTTER = 10.0;
  static INITIAL_PRICE_FLOUR = 10.0;

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
}

module.exports = Ingredient;
