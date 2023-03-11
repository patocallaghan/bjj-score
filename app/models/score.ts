import { action } from '@ember/object';

export default class Score {
  total = 0;

  @action
  add(value: number) {
    this.total += value;
  }

  @action
  subtract(value: number) {
    this.total -= value;
  }

  @action
  reset() {
    this.total = 0;
  }
}
