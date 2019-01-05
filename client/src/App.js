import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Home from './Home/Home';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:3500/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  </ApolloProvider>
);

export default App;