import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _enemy: SimpleFighter;

  constructor(player: Fighter, enemy: SimpleFighter) {
    super(player);
    this._enemy = enemy;
  }

  fight(): number {
    if (this._enemy.lifePoints > 0 && this.player.lifePoints > 0) {
      this._enemy.attack(this.player);
      this.player.attack(this._enemy);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}