import Race from './Race';

export default class Orc extends Race {
  private static _createdRacesInstances = 0;

  constructor(_maxLifePoints: 74, name: string, dexterity: number) {
    super(name, dexterity);
    Orc._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this.maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}