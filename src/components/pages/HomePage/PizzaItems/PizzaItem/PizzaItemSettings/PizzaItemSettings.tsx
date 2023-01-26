import React from 'react';
import cn from 'classnames';

import './PizzaItemSettings.styles.scss';
import { TPizzaItemSettings } from './PizzaItemSettings.types';

import { PizzaItemSettingsProp } from './PizzaItemSettingsProp/PizzaItemSettingsProp';

export const PizzaItemSettings = (props: TPizzaItemSettings) => {
  const { doughs, sizes } = props;

  return (
    <div className="pizza-item__settings">
      <ul className={cn('settings-props', 'settings-props_doughs')}>
        {doughs.map(({ name, available }) => {
          return <PizzaItemSettingsProp name={name} available={available} key={name} isActive={true} />;
        })}
      </ul>
      <ul className={cn('settings-props', 'settings-props_sizes')}>
        {sizes.map(({ name, available }) => {
          return <PizzaItemSettingsProp name={name} available={available} key={name} isActive={false} />;
        })}
      </ul>
    </div>
  );
};
