import React from 'react';

import './PizzaSkeleton.styles.scss';

export const PizzaSkeleton = () => {
  return (
    <div className="pizza-skeleton">
      <div className="pizza-skeleton__image" />
      <div className="pizza-skeleton__name" />
      <div className="pizza-skeleton__options" />
      <div className="pizza-skeleton__actions">
        <div className="pizza-skeleton__price" />
        <div className="pizza-skeleton__button" />
      </div>
    </div>
  );
};
