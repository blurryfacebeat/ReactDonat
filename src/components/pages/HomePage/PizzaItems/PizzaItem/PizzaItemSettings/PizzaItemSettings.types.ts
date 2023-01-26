import { IPizzaItem } from '../PizzaItem.types';

type TPizzaItemSettings = Pick<IPizzaItem, 'doughs' | 'sizes'>;

export { TPizzaItemSettings };
