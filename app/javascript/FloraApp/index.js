import React from 'react'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'

import { initialState } from './store/floraStore'
import Calendar from '../components/Calendar'

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
  link
})
cache.writeData({ data: initialState })

const FloraApp = () => (
  <ApolloProvider client={ client }>
    <Calendar />
  </ApolloProvider>
)

export default FloraApp
