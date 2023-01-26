import { IPizzaItem, IPizzaSettings } from '../PizzaItem.types';

export interface IPizzaItemSettings extends Pick<IPizzaItem, 'doughs' | 'sizes'> {
  pizzaActiveSettings: IPizzaSettings;
  onUpdatePizzaSettings: (settingsItem: IPizzaSettings) => void;
}
