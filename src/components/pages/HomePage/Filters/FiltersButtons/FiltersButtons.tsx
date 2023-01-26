import React, { useState } from 'react';

import './FiltersButtons.styles.scss';
import { IFiltersProps } from '../Filters.types';

import { FiltersButtonsItem } from './FiltersButtonsItem/FiltersButtonsItem';

export const FiltersButtons = (props: IFiltersProps) => {
  const { filters } = props;

  const [activeFilter, setActiveFilter] = useState<string>(filters[0].type);

  return (
    <ul className="filters__buttons">
      {filters.map(({ name, type }) => {
        return (
          <FiltersButtonsItem
            onSetNewFilter={() => setActiveFilter(type)}
            name={name}
            type={type}
            isActive={type === activeFilter}
            key={name}
          />
        );
      })}
    </ul>
  );
};
