import React from 'react';

import './MainLayoutHeaderLogo.styles.scss';

import LogoImg from '@/assets/icons/logo.svg';

export const MainLayoutHeaderLogo = () => {
  return (
    <div className="main-layout-header__logo">
      <LogoImg width={48} height={48} />
      <div className="logo__text">
        <p>REACT DONAT</p>
        <p>самые вкусные пончики во вселенной</p>
      </div>
    </div>
  );
};
