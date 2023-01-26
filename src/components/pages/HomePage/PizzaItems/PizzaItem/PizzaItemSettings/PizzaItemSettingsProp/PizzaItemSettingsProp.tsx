import React from 'react';
import cn from 'classnames';

import './PizzaItemSettingsProp.styles.scss';
import { IPizzaItemSettingsProp } from './PizzaItemSettingsProp.types';

export const PizzaItemSettingsProp = (props: IPizzaItemSettingsProp) => {
  const { name, available, isActive } = props;

  return (
    <li
      className={cn('settings-prop', {
        'settings-prop_available': available,
        'settings-prop_active': isActive,
      })}
    >
      {name}
    </li>
  );
};
