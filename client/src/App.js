import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BeerList from './components/BeerList/BeerList';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:3500/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">BEERs!</h1>
      </header>
      <p className="App-intro">This is a basic React App</p>
      <BeerList />
    </div>
  </ApolloProvider>
);

export default App;
