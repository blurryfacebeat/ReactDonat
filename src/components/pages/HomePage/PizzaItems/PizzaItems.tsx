import React from 'react';

import './PizzaItems.styles.scss';
import pizzas from '@/static/pizzas.json';

import { PizzaItem } from './PizzaItem/PizzaItem';

export const PizzaItems = () => {
  const { pizzas: pizzasList } = pizzas;

  return (
    <>
      <h2>Все пиццы</h2>
      <ul className="pizza-items">
        {pizzasList.map(({ name, doughs, sizes, price, img }) => {
          return <PizzaItem name={name} doughs={doughs} sizes={sizes} price={price} img={img} key={name} />;
        })}
      </ul>
    </>
  );
};
