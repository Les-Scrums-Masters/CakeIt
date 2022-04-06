class Baker {
  static INITIAL_PRICE = 10.0;
  static INITIAL_VOLUME = 100;
  static INITIAL_MONEY = 4000.0;
  static FIXED_COST = 2000;
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.price = Baker.INITIAL_PRICE;
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
