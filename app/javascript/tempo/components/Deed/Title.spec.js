import React from 'react'
import { shallow } from 'enzyme'

import Title from './Title'

describe('running in-line tests with yarn test', () => {

  it('finds files with a .spec.js extension', () => {
      expect("Hello Jest").toEqual("Hello Jest")
   })
})

describe('Tests with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<Title id='id' title='title' deedsSince="deedsSince" />);
    })
})
