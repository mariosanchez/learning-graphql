import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

const Header = () => (
  <header className="Header">
    <img src={logo} className="Header__logo" alt="logo" />
    <h1 className="Header__title">BEERs!</h1>
  </header>
);

export default Header;
