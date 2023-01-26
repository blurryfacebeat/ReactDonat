import React from 'react';
import cn from 'classnames';

import './PizzaItemSettings.styles.scss';
import { IPizzaItemSettings } from './PizzaItemSettings.types';

import { PizzaItemSettingsProp } from './PizzaItemSettingsProp/PizzaItemSettingsProp';

export const PizzaItemSettings = (props: IPizzaItemSettings) => {
  const { doughs, sizes, pizzaActiveSettings, onUpdatePizzaSettings } = props;

  return (
    <div className="pizza-item__settings">
      <ul className={cn('settings-props', 'settings-props_doughs')}>
        {doughs.map((dough) => {
          return (
            <PizzaItemSettingsProp
              onSetActiveProp={() =>
                dough.available ? onUpdatePizzaSettings({ ...pizzaActiveSettings, dough }) : undefined
              }
              name={dough.name}
              available={dough.available}
              key={dough.name}
              isActive={dough.name === pizzaActiveSettings.dough?.name}
            />
          );
        })}
      </ul>
      <ul className={cn('settings-props', 'settings-props_sizes')}>
        {sizes.map((size) => {
          return (
            <PizzaItemSettingsProp
              onSetActiveProp={() =>
                size.available ? onUpdatePizzaSettings({ ...pizzaActiveSettings, size }) : undefined
              }
              name={size.name}
              available={size.available}
              key={size.name}
              isActive={size.name === pizzaActiveSettings.size?.name}
            />
          );
        })}
      </ul>
    </div>
  );
};
