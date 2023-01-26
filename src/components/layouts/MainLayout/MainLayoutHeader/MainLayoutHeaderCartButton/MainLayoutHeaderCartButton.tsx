import React from 'react';
import { Link } from 'react-router-dom';

import './MainLayoutHeaderCartButton.styles.scss';

import CartIcon from '@/assets/icons/MainLayout/cart.svg';

export const MainLayoutHeaderCartButton = () => {
  return (
    <Link to="/cart" className="main-layout-header__cart-button">
      <p className="cart-button__sum">520 ₽</p>
      <span className="cart-button__divider"></span>
      <div className="cart-button__counter">
        <CartIcon />
        <p>3</p>
      </div>
    </Link>
  );
};
