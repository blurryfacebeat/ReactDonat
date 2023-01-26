import React, { useState } from 'react';

import './PizzaItem.styles.scss';

import { IPizzaItem } from './PizzaItem.types';

import { PizzaItemSettings } from './PizzaItemSettings/PizzaItemSettings';
import { PizzaItemAddButton } from './PizzaItemAddButton/PizzaItemAddButton';

export const PizzaItem = (props: IPizzaItem) => {
  const { name, doughs, price, sizes, img } = props;

  const [pizzaCount, setPizzaCount] = useState<number>(0);

  return (
    <li className="pizza-item">
      <img className="pizza-item__img" src={img} alt={`Pizza ${name}`} />
      <p className="pizza-item__name">{name}</p>
      <PizzaItemSettings doughs={doughs} sizes={sizes} />
      <div className="pizza-item__footer">
        <p className="pizza-item__price">от {price} ₽</p>
        <PizzaItemAddButton onClick={() => setPizzaCount(pizzaCount + 1)} pizzaCount={pizzaCount} />
      </div>
    </li>
  );
};
