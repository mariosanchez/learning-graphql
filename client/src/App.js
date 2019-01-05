import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:3500/graphql'
});

client
  .query({
    query: gql`
      {
        getBeers {
          id
          name
          reviewer {
            name
            id
          }
        }
      }
    `
  })
  .then(result => console.log(result));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BEERs!</h1>
        </header>
        <p className="App-intro">This is a basic React App</p>
      </div>
    );
  }
}

export default App;
