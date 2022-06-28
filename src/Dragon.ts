import Fighter, { SimpleFighter } from './Fighter';
import Monster from './Monster';

export default class Dragon extends Monster {
  protected _lifePoints: number;
  protected _strength: number;
  constructor() {
    super();
    this._lifePoints = 999;
    this._strength = 999;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) { this._lifePoints -= attackPoints; }
    if (this._lifePoints <= 0) { this._lifePoints = -1; }

    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);
  }
}