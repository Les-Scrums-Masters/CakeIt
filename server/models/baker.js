class Baker {
  INITIAL_PRICE = 10.0;
  INITIAL_VOLUME = 100;
  INITIAL_MONEY = 4000.0;
  FIXED_COST = 2000;
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.price;
  }

  getId() {
    return this.id;
  }

  newDay(price, volume, cakeSold) {
    this.price = price;
    this.volume = volume;
    this.cakeSold += cakeSold;
  }
}
