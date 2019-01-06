import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import loginIcon from './loginIcon.svg';
import './Header.css';
import LoginIcon from '../Icons/LoginIcon';
import Logo from '../Icons/Logo';

const Header = () => (
  <header className="Header">
    <Link to="/" className="Header__home-link">
      <Logo className="Header__logo" accessibilityLabel="logo" />
      <h1 className="Header__title">BEERs!</h1>
    </Link>
    <Link to="/login" className="Header__login-link">
      <LoginIcon className={'Header__login-icon'} accessibilityLabel="login" />
    </Link>
  </header>
);

export default Header;
