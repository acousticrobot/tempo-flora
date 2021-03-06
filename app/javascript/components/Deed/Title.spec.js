import React from 'react'

import { mount } from 'enzyme'
import { MockedProvider } from 'react-apollo/test-utils'

import DeedTitle, { CSS } from './Title'

describe('CSS', () => {
  it('returns "task--title -completed" by default', () => {
    const css = CSS()
    expect(css).toEqual('task--title -completed')
  })

  it('returns "task--title -error" when error', () => {
    const css = CSS(null, true)
    expect(css).toEqual('task--title -error')
  })

  it('returns "task--title -loading" when loading', () => {
    const css = CSS(true, null)
    expect(css).toEqual('task--title -loading')
  })
})

describe('Tests with Enzyme', () => {
  it('renders without crashing', () => {
    mount(
      <MockedProvider>
        <DeedTitle id='id' title='title' deedsSince='deedsSince' />
      </MockedProvider>
    )
  })
})
