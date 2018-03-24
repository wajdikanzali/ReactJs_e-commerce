
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import 'semantic-ui-css/semantic.min.css';
import Routes from './routes';
import client from './apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
  , document.getElementById('root')
);
