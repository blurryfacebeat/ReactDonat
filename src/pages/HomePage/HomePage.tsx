import React from 'react';

import { WithMainLayout } from '@/layouts/MainLayout/MainLayout';
import { Filters } from '@/components/pages/HomePage/Filters/Filters';
import { PizzaItems } from '@/components/pages/HomePage/PizzaItems/PizzaItems';

const HomePage = () => {
  return (
    <section>
      <Filters />
      <PizzaItems />
    </section>
  );
};

export default WithMainLayout(HomePage);
