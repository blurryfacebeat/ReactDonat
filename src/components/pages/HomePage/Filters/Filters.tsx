import React from 'react';

import './Filters.styles.scss';
import { filtersButtonList, filtersDropdownList } from '@/components/pages/HomePage/Filters/helpers';

import { FiltersButtons } from './FiltersButtons/FiltersButtons';
import { FiltersDropdown } from './FiltersDropdown/FiltersDropdown';

export const Filters = () => {
  return (
    <div className="home-page__filters">
      <FiltersButtons filters={filtersButtonList} />
      <FiltersDropdown filters={filtersDropdownList} />
    </div>
  );
};
