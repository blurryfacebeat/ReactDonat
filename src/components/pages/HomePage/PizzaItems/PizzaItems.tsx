import React, { useEffect, useState } from 'react';

import './PizzaItems.styles.scss';

import { PizzaItem } from './PizzaItem/PizzaItem';
import { fetchItems } from '@/services/fetchItems/fetchItems';
import { IFetchPizzaItem } from '@/services/fetchItems/fetchItems.types';

import { PizzasSkeleton } from '@/components/common/Skeletons/PizzasSkeleton/PizzasSkeleton';

export const PizzaItems = () => {
  const [isPizzasLoading, setIsPizzasLoading] = useState<boolean>(true);
  const [pizzasList, setPizzasList] = useState<Array<IFetchPizzaItem>>([]);

  useEffect(() => {
    fetchItems()
      .then((res) => {
        setIsPizzasLoading(true);

        setPizzasList(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPizzasLoading(false);
      });
  }, []);

  return (
    <>
      <h2>Все пиццы</h2>
      {isPizzasLoading ? (
        <PizzasSkeleton />
      ) : (
        <ul className="pizza-items">
          {pizzasList.map(({ name, doughs, sizes, price, img }) => {
            return <PizzaItem name={name} doughs={doughs} sizes={sizes} price={price} img={img} key={name} />;
          })}
        </ul>
      )}
    </>
  );
};
