import React from 'react';

import './PizzaItemAddButton.styles.scss';
import { IPizzaItemButtonProps } from './PizzaItemAddButton.types';

import { PlusIcon } from '@/assets/icons/PizzaItem/PlusIcon';

export const PizzaItemAddButton = (props: IPizzaItemButtonProps) => {
  const { pizzaCount, onClick } = props;

  return (
    <button onClick={onClick} className="pizza-item__add-button">
      <PlusIcon />
      <p>Добавить</p>
      {!!pizzaCount && <span>{pizzaCount}</span>}
    </button>
  );
};
