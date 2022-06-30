import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _enemy: SimpleFighter[];

  constructor(player: Fighter, enemy: SimpleFighter[]) {
    super(player);
    this._enemy = enemy;
  }

  fight(): number {
    this._enemy.forEach((E) => {
      while (E.lifePoints > 0 && this.player.lifePoints > 0) {
        E.attack(this.player);
        this.player.attack(E);
      }
    });
    
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}