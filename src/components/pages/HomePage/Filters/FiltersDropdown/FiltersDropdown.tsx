import cn from 'classnames';
import React, { useState } from 'react';

import './FiltersDropdown.styles.scss';
import { IFiltersProps } from '../Filters.types';

import TriangleIcon from '@/assets/icons/Filters/triangle.svg';
import { ClickOutside } from '@/components/common/CllickOutside/ClickOutside';
import { FiltersDropdownItem } from './FiltersDropdownItem/FiltersDropdownItem';

export const FiltersDropdown = (props: IFiltersProps) => {
  const { filters } = props;

  const [isDropdownActive, setDropdownActive] = useState(false);

  return (
    <div className="filters__dropdown">
      <div className="dropdown__container">
        <TriangleIcon
          className={cn('dropdown__icon', {
            dropdown__icon_active: isDropdownActive,
          })}
        />
        <p className="dropdown__sort">Сортировка по: </p>
        <p onClick={() => setDropdownActive(true)} className="dropdown__active">
          популярности
        </p>
      </div>

      {isDropdownActive && (
        <ClickOutside action={() => setDropdownActive(false)}>
          <ul className="dropdown__list">
            {filters.map(({ name, type }) => {
              return <FiltersDropdownItem name={name} type={type} active={name === 'популярности'} key={name} />;
            })}
          </ul>
        </ClickOutside>
      )}
    </div>
  );
};
