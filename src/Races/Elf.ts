import Race from './Race';

export default class Elf extends Race {
  private static _createdRacesInstances = 0;

  constructor(_maxLifePoints: 99, name: string, dexterity: number) {
    super(name, dexterity);
    Elf._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this.maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}