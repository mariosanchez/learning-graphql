import React from 'react';
import BeerList from '../components/BeerList/BeerList';
import logo from '../logo.svg';

const Home = () => (
  <div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">BEERs!</h1>
    </header>
    <p className="App-intro">This is a basic React App</p>
    <BeerList />
  </div>
);

export default Home;
