const myJson = require("./news.json");

class News {
  constructor(name, description, multipliers) {
    this.name = name;
    this.description = description;
    this.multipliers = multipliers;
    this.date = "NO VALUE";
  }

  static loadNews() {
    let list = [];
    myJson.forEach((news) => {
      list.push(new News(news.name, news.descriptions, news.multipliers));
    });
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

module.exports = News;
