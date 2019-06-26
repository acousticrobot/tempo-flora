import React from 'react'
import PropTypes from 'prop-types'
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import { initialState } from './store/tempoStore'
import TaskboardContainer from './containers/TaskboardContainer'

// get authentication token
const csrfElement = document.querySelector('meta[name="csrf-token"]')
const csrfToken = csrfElement && csrfElement.getAttribute('content')

const cache = new InMemoryCache()

const link = createHttpLink({
  uri: '/graphql',
  credentials: 'same-origin',
  headers: { 'X-CSRF-Token': csrfToken }
})

const client = new ApolloClient({
  cache,
  link,
  resolvers: {}
})
cache.writeData({ data: initialState })

const TempoApp = ({ userId }) => (
  <ApolloProvider client={ client }>
    <TaskboardContainer userId={ userId } />
  </ApolloProvider>
)

TempoApp.propTypes = {
  userId: PropTypes.number.isRequired
}

export default TempoApp
