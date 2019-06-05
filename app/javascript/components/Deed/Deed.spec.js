import React from 'react'

import { mount } from 'enzyme'
import { MockedProvider } from 'react-apollo/test-utils'

import UNDO_DEED from '../../mutations/UndoDeed'
import Deed from './Deed'
import DeedTitle from './Title'

const mocks = [
  {
    request: {
      query: UNDO_DEED,
      variables: {
        deedId: '1'
      }
    },
    result: {
      data: { UndoDeedMutation: {
        focus: {
          id: '1',
          tasks: [{
            id: '1',
            title: 'test undo deed',
            points: 1,
            repeatable: true,
            position: 1,
            __typename: 'Task'
          }],
          deeds: [],
          __typename: 'Focus'
        },
        __typename: 'UndoDeedMutationPayload'
      } }
    }
  }
]

const mockDeed = {
  id: '1',
  title: 'Test Deed Index'
}

describe('Deed Component', () => {
  it('renders Deed as a list item', () => {
    const component = mount(
      <MockedProvider mocks={ mocks } addTypename={ false }>
        <Deed deed={ mockDeed } deedsSince='deedsSince' />
      </MockedProvider>
    )
    expect(component.find('li.focus-item').length).toEqual(1)
  })
})

describe('Deed Integration', () => {
  it('renders the DeedTitle', () => {
    const component = mount(
      <MockedProvider mocks={ mocks } addTypename={ false }>
        <Deed deed={ mockDeed } deedsSince='deedsSince' />
      </MockedProvider>
    )
    expect(component.find(DeedTitle).length).toEqual(1)
    expect(component.find('div.task--title').text()).toEqual('Test Deed Index')
  })
})
