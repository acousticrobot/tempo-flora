import React, { PropTypes } from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider, createNetworkInterface } from 'react-apollo';
import FloraContainer from '../containers/FloraContainer';
import configureStore from '../store/floraStore';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin',
  },
});

var csrfElement = document.querySelector('meta[name="csrf-token"]');
var csrf = csrfElement && csrfElement.getAttribute('content');

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }

    // get the authentication token from local storage if it exists
    //const token = localStorage.getItem('token');
    req.options.headers['x-csrf-token'] = csrf ? csrf : null;
    next();
  }
}]);


// queries `/graphql` by default
const client = new ApolloClient({
  networkInterface,
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



