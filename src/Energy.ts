export type EnergyType = 'stamina' | 'mana' | string;

export default interface Energy {
  type_: EnergyType,
  amount: number
}
