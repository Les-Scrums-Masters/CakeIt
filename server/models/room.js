import Baker from './baker.js';
import Ingredient from './ingredient.js';
import News from './news.js';
import { INITIAL_PRICES } from '../config.js'

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default class Room {
  constructor(hostSocket, hostName, roomCode) {
    this.players = [new Baker(hostSocket, hostName)];
    this.roomCode = roomCode;
    this.roundNumber = 1;
    this.ingredients = {
      egg: new Ingredient("egg", INITIAL_PRICES.egg),
      chocolate: new Ingredient(
        "chocolate",
        INITIAL_PRICES.chocolate
      ),
      sugar: new Ingredient("sugar", INITIAL_PRICES.sugar),
      butter: new Ingredient("butter", INITIAL_PRICES.butter),
      flour: new Ingredient("flour", INITIAL_PRICES.flour),
    };
    this.news = [];
    this.remainingNews = News.loadNews();
    this.nbRounds = 5;
    this.probaEvent = 95.5;
    shuffle(this.remainingNews);
  }

  addPlayer(id, name) {
    this.players.push(new Baker(id, name));
  }

  removePlayer(id) {
    this.players.forEach((player, index) => {
      if (player.getId() == id) {
        this.players.splice(index, 1);
      }
    });
  }

  getId() {
    return this.roomCode;
  }

  getPlayers() {
    return this.players;
  }

  getPlayer(id) {
    this.players.forEach((player, index) => {
      if (player.getId() === id) {
        return this.player[index];
      }
    });
    return null;
  }

  getNews() {
    return this.remainingNews.pop();
  }

  getRound() {
    return this.roundNumber;
  }

  setNbRounds(nbRounds) {
    this.nbRounds = nbRounds;
  }
  setProba(probaEvent) {
    this.probaEvent = probaEvent;
  }
  startGame() {
    this.roundNumber = 1;
  }

  nextDay() {
    this.roundNumber++;
  }

  updateIngredientPrices(multipliers) {
    const egg = this.ingredients.egg.price;
    const chocolate = this.ingredients.chocolate.price;
    const sugar = this.ingredients.sugar.price;
    const butter = this.ingredients.butter.price;
    const flour = this.ingredients.flour.price;

    egg.set(egg.get() * multipliers.egg);
    chocolate.set(chocolate.get() * multipliers.chocolate);
    sugar.set(sugar.get() * multipliers.sugar);
    butter.set(butter.get() * multipliers.butter);
    flour.set(flour.get() * multipliers.flour);
  }
}

