import React from 'react';

import './MainLayoutHeader.styles.scss';

import { MainLayoutHeaderLogo } from './MainLayoutHeaderLogo/MainLayoutHeaderLogo';
import { MainLayoutHeaderCartButton } from './MainLayoutHeaderCartButton/MainLayoutHeaderCartButton';

export const MainLayoutHeader = () => {
  return (
    <header className="main-layout__header">
      <MainLayoutHeaderLogo />
      <MainLayoutHeaderCartButton />
    </header>
  );
};
