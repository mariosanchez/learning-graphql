import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Home from './Home/Home';
import Login from './Login/Login';

const client = new ApolloClient({
  uri: 'http://localhost:3500/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  </ApolloProvider>
);

export default App;
