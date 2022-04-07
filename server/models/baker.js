const HistoryValue = require("./historyValue.js");

class Baker {
  static INITIAL_PRICE = 10.0;
  static INITIAL_VOLUME = 100;
  static INITIAL_MONEY = 4000.0;
  static FIXED_COST = 2000;

  constructor(id, name) {
    this.id = id;
    this.name = name;

    this.price = new HistoryValue(Baker.INITIAL_PRICE);
    this.volume = new HistoryValue(Baker.INITIAL_VOLUME);
    this.money = new HistoryValue(Baker.INITIAL_MONEY);
    this.sales = new HistoryValue(0);
  }

  getId() {
    return this.id;
  }

  newDay(price, volume, cakeSold) {
    this.price.set(price);
    this.volume.set(volume);
    this.cakeSold.set(cakeSold);
  }
}

module.exports = Baker;
