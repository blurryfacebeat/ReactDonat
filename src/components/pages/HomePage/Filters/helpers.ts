import { IFilterItem } from '@/components/pages/HomePage/Filters/Filters.types';

export const filtersButtonList: Array<IFilterItem> = [
  {
    name: 'Все',
    type: 'all',
  },
  {
    name: 'Мясные',
    type: 'meat',
  },
  {
    name: 'Вегетарианские',
    type: 'vegan',
  },
  {
    name: 'Гриль',
    type: 'grill',
  },
  {
    name: 'Острые',
    type: 'hot',
  },
  {
    name: 'Закрытые',
    type: 'close',
  },
];

export const filtersDropdownList: Array<IFilterItem> = [
  {
    name: 'популярности',
    type: 'popular',
  },
  {
    name: 'по цене',
    type: 'price',
  },
  {
    name: 'по алфавиту',
    type: 'alphabetical',
  },
];
