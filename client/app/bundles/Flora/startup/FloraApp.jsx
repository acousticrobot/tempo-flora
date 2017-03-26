import React, { PropTypes } from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import FloraContainer from '../containers/FloraContainer';
import configureStore from '../store/floraStore';


// queries `/graphql` by default
const client = new ApolloClient({
  // manage Apollo updates off of global ids
  dataIdFromObject: o => o._id
});

// See documentation for
//   https://github.com/reactjs/react-redux
//   and http://dev.apollodata.com/react/redux.html
// This is how you get props from the Rails view into the redux store
//   and use it alongside Apollo's use of the store.
const FloraApp = (props, _railsContext) => ( // eslint-disable-line no-unused-vars
  <ApolloProvider store={configureStore(props, client)} client={client}>
    <FloraContainer userId={props.userId} />
  </ApolloProvider>
);

FloraApp.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default FloraApp;



