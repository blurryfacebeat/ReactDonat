import React from 'react';

import './FiltersButtons.styles.scss';
import { IFiltersProps } from '../Filters.types';

import { FiltersButtonsItem } from './FiltersButtonsItem/FiltersButtonsItem';

export const FiltersButtons = (props: IFiltersProps) => {
  const { filters } = props;

  return (
    <ul className="filters__buttons">
      {filters.map(({ name, type }, idx) => {
        return <FiltersButtonsItem name={name} type={type} active={idx === 0} key={name} />;
      })}
    </ul>
  );
};
