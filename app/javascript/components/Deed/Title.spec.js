import React from 'react'

import { mount } from 'enzyme'
import { MockedProvider } from 'react-apollo/test-utils'

import DeedTitle from './Title'

describe('Tests with Enzyme', () => {
  it('renders without crashing', () => {
    mount(
      <MockedProvider>
        <DeedTitle id='id' title='title' deedsSince='deedsSince' />
      </MockedProvider>
    )
  })
})
