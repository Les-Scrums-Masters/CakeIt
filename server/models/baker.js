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
    this.profit = new HistoryValue(0);

    this.ready = false;
  }

  getId() {
    return this.id;
  }

  setReady(value) {
    this.ready = value;
  }

  newDay(price, volume, sales, profit, money) {
    this.price.set(price);
    this.volume.set(volume);
    this.sales.set(sales);
    this.profit.set(profit);
    this.money.set(money);
  }

  generateEvolution() {
    this.moneyEvolution = this.money.getEvolution();
    this.salesEvolution = this.sales.getEvolution();
    this.volumeEvolution = this.volume.getEvolution();
    this.profitEvolution = this.profit.getEvolution();
    this.priceEvolution = this.price.getEvolution();
  }
}

module.exports = Baker;
