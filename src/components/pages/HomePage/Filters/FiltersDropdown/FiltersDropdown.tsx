import cn from 'classnames';
import React, { useState } from 'react';

import './FiltersDropdown.styles.scss';
import { IFiltersProps, IFilterItem } from '../Filters.types';

import TriangleIcon from '@/assets/icons/Filters/triangle.svg';
import { ClickOutside } from '@/components/common/CllickOutside/ClickOutside';
import { FiltersDropdownItem } from './FiltersDropdownItem/FiltersDropdownItem';

export const FiltersDropdown = (props: IFiltersProps) => {
  const { filters } = props;

  const [isDropdownActive, setDropdownActive] = useState<boolean>(false);
  const [activeDropDownFilter, setActiveDropDownFilter] = useState<IFilterItem>(filters[0]);

  const onSetActiveDropdownItem = (filter: IFilterItem) => {
    setActiveDropDownFilter(filter);
    setDropdownActive(false);
  };

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
          {activeDropDownFilter.name}
        </p>
      </div>

      {isDropdownActive && (
        <ClickOutside action={() => setDropdownActive(false)}>
          <ul className="dropdown__list">
            {filters.map((filter) => {
              return (
                <FiltersDropdownItem
                  onSetNewFilter={() => onSetActiveDropdownItem(filter)}
                  name={filter.name}
                  type={filter.type}
                  isActive={filter.type === activeDropDownFilter.type}
                  key={filter.name}
                />
              );
            })}
          </ul>
        </ClickOutside>
      )}
    </div>
  );
};
