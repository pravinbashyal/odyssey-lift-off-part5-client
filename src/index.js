import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

console.log('apollo url', process.env.APOLLO_URL)

const client = new ApolloClient({
  uri: process.env.APOLLO_URL || 'https://localhost:4000',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
