import React, { useEffect, useState } from 'react';

import './PizzaItems.styles.scss';

import { PizzaItem } from './PizzaItem/PizzaItem';
import { fetchItems } from '@/services/fetchItems/fetchItems';
import { IFetchPizzaItem } from '@/services/fetchItems/fetchItems.types';

export const PizzaItems = () => {
  const [pizzasList, setPizzasList] = useState<Array<IFetchPizzaItem>>([]);

  useEffect(() => {
    fetchItems()
      .then((res) => {
        setPizzasList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
