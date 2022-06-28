import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _energyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType | string {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}