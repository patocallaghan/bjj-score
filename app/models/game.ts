import Player from './player';

export default class Game {
  player1: Player;
  player2: Player;

  constructor() {
    this.player1 = new Player();
    this.player2 = new Player();
  }

  start() {
    this.player1.setup('red');
    this.player2.setup('blue');
  }

  updateScore(player: Player, value: number) {
    player.updateScore(value);
  }
}
