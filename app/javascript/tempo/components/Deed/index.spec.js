import React from 'react'

import { mount } from 'enzyme'
import { MockedProvider } from 'react-apollo/test-utils'

import UNDO_DEED from '../../mutations/UndoDeed'
import Deed from './index'

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


describe('Tests with Enzyme', () => {
  it('renders without crashing', () => {
    mount(
      <MockedProvider mocks={ mocks } addTypename={ false }>
        <Deed deed={ mockDeed } deedsSince='deedsSince' />
      </MockedProvider>
    )
  })
})
