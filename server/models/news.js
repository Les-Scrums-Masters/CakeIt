import { NEWS } from '../config.js'

export default class News {
  constructor(name, description, multipliers) {
    this.name = name;
    this.description = description;
    this.multipliers = multipliers;
    this.date = 0;
  }

  static loadNews() {
    let list = [];
    NEWS.forEach((news) => {
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

