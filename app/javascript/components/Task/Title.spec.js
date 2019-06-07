import React from 'react'

import { mount } from 'enzyme'
import { MockedProvider } from 'react-apollo/test-utils'

import TaskTitle, { CSS } from './Title'

describe('CSS', () => {
  it('returns "task--title" by default', () => {
    const css = CSS()
    expect(css).toEqual('task--title')
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

describe('TaskTitle', () => {
  it('renders without crashing', () => {
    mount(
      <MockedProvider>
        <TaskTitle id='id' title='title' repeatable={ false } deedsSince='deedsSince' completedAt='completedAt' />
      </MockedProvider>
    )
  })
})
