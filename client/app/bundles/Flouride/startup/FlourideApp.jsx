import React from 'react';
import FlourideContainer from '../containers/FlourideContainer';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

// By default, this client will send queries to the
//  `/graphql` endpoint on the same host
const client = new ApolloClient();

const FlourideApp = (props, _railsContext) => ( // eslint-disable-line no-unused-vars
  <ApolloProvider client={client}>
    <FlourideContainer />
  </ApolloProvider>
);

export default FlourideApp;
