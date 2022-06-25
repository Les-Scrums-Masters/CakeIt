export default class HistoryValue {
  values = [];

  constructor(initialValue) {
    this.values.push(initialValue);
  }

  get() {
    return this.values[this.values.length - 1];
  }

  getHistory() {
    return this.values;
  }

  getAtIndex(index) {
    return this.values[index];
  }

  getEvolution() {
    if (this.values.length > 2) {

      let actual = this.get();
      let old = this.getAtIndex(this.values.length - 2);
      return ((actual - old) * 100) / old;
    } else {
      return 0;
    }
  }

  set(newValue) {
    this.values.push(newValue);
  }
}

