import Race from './Race';

export default class Halfling extends Race {
  private static _createdRacesInstances = 0;

  constructor(_maxLifePoints: 60, name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this.maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}