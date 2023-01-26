import React from 'react';
import cn from 'classnames';

import './FiltersDropdownItem.styles.scss';
import { IFilterItemProps } from '../../Filters.types';

export const FiltersDropdownItem = (props: IFilterItemProps) => {
  const { name, isActive, onSetNewFilter } = props;

  return (
    <li
      onClick={onSetNewFilter}
      className={cn('filters-dropdown__item', {
        'filters-dropdown__item_active': isActive,
      })}
    >
      {name}
    </li>
  );
};
