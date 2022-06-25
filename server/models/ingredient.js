import HistoryValue from "./historyValue.js";


export default class Ingredient {
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

