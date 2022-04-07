const HistoryValue = require("./historyValue.js");

class Ingredient {
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

module.exports = Baker;
