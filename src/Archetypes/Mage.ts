import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _energyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType | string {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}