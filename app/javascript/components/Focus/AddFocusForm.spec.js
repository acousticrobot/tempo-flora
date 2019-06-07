import React from 'react'

import { mount } from 'enzyme'
import { MockedProvider } from 'react-apollo/test-utils'

import AddFocusForm, { CSS } from './AddFocusForm'

describe('CSS', () => {
  it('creates a css class from a string', () => {
    const css = CSS('from_type')
    expect(css).toEqual('add-focus--form-from_type')
  })

  it('creates a css class from an array', () => {
    const css = CSS('one', 'two')
    expect(css).toEqual('add-focus--form-one add-focus--form-two')
  })
})


describe('AddFocusForm Component', () => {
  it('renders a form with title as input', () => {
    const component = mount(
      <MockedProvider>
        <AddFocusForm closeFocusForm={ () => {} } deedsSince='deedsSince' />
      </MockedProvider>
    )
    expect(component.find('input.add-focus--form-title-input').length).toEqual(1)
  })
})
