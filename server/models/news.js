class News {
  name;
  description;
  multipliers = {};
  date;

  constructor(jsonNew) {
    this.name = jsonNew.name;
    this.description = jsonNew.description;
    this.multipliers = jsonNew.multipliers;
  }

  static loadNews(jsonNews) {
    let list = [];

    for (item in jsonNews) {
      list.push(new News(element));
    }

    return list;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getMultipliers() {
    return this.multipliers;
  }
}
