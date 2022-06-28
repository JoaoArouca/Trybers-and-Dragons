import Race from './Race';

export default class Dwarf extends Race {
  private static _createdRacesInstances = 0;

  constructor(_maxLifePoints: 80, name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this.maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}