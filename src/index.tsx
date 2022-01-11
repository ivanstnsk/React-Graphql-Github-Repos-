import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import './custom.scss';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
