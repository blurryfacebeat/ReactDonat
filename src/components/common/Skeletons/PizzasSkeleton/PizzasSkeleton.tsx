import React from 'react';

import './PizzasSkeleton.styles.scss';
import { IPizzasSkeletonProps } from '@/components/common/Skeletons/PizzasSkeleton/PizzasSkeleton.types';

import { PizzaSkeleton } from '@/components/common/Skeletons/PizzaSkeleton/PizzaSkeleton';

export const PizzasSkeleton = (props: IPizzasSkeletonProps) => {
  const { count = 8 } = props;

  return (
    <div className="pizzas-skeleton">
      {[...Array(count)].map((_, idx) => {
        return <PizzaSkeleton key={idx} />;
      })}
    </div>
  );
};
