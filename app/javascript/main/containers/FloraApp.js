import React from 'react'
import PropTypes from 'prop-types'
import ApolloClient from 'apollo-client'
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from "react-apollo"
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import gql from 'graphql-tag'

import {initialState } from '../store/floraStore'
import FloraContainer from './FloraContainer'

// get authentication token
var csrfElement = document.querySelector('meta[name="csrf-token"]')
var csrfToken = csrfElement && csrfElement.getAttribute('content')

const cache = new InMemoryCache()
const stateLink = withClientState({
  cache,
  defaults: initialState,
  resolvers: {},
});

const httpLink = createHttpLink({
  uri: '/graphql',
  credentials: 'same-origin',
  headers: { 'X-CSRF-Token': csrfToken }
})

const link = ApolloLink.from([stateLink, httpLink]);

const client = new ApolloClient({
  cache,
  link,
})

const FloraApp = (props) => (
  <ApolloProvider client={client}>
    <FloraContainer userId={ props.userId }/>
  </ApolloProvider>
)

FloraApp.propTypes = {
  userId: PropTypes.number.isRequired,
}

let foo = "bar";
export default FloraApp
