import Score from './score';

type Color = 'red' | 'blue';

export default class Player {
  name = '';
  color?: Color | null;
  score?: Score | null;

  setup(color: Color) {
    this.score = new Score();
    this.color = color;
  }

  reset() {
    this.score = null;
    this.color = null;
  }

  updateScore(points: number) {
    if (this.score) {
      this.score.add(points);
    }
  }
}
