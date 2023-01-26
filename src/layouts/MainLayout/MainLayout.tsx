import React, { FunctionComponent } from 'react';

import './MainLayout.styles.scss';
import { IMainLayoutProps } from 'src/layouts/MainLayout/MainLayout.types';

import { MainLayoutHeader } from '@/components/layouts/MainLayout/MainLayoutHeader/MainLayoutHeader';

const MainLayout = (props: IMainLayoutProps) => {
  const { children } = props;

  return (
    <div className="main-layout">
      <div className="main-layout__container">
        <MainLayoutHeader />
        <main className="main-layout__main">{children}</main>
      </div>
    </div>
  );
};

export const WithMainLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return (props: T) => {
    return (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    );
  };
};
