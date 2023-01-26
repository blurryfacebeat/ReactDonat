import React from 'react';

import './FiltersDropdownItem.styles.scss';
import { IFilterItemProps } from '../../Filters.types';

export const FiltersDropdownItem = (props: IFilterItemProps) => {
  const { name, active } = props;

  return <li className="filters-dropdown__item">{name}</li>;
};
