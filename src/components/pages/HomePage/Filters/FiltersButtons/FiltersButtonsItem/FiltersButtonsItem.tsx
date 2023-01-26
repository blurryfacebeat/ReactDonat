import React from 'react';
import cn from 'classnames';

import './FiltersButtonsItem.styles.scss';
import { IFilterItemProps } from '../../Filters.types';

export const FiltersButtonsItem = (props: IFilterItemProps) => {
  const { name, active } = props;

  return (
    <li
      className={cn('filters-buttons__item', {
        'filters-buttons__item_active': active,
      })}
    >
      {name}
    </li>
  );
};
