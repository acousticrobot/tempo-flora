import React from 'react'

import TaskFilterButton from './TaskFilterButton'
import FocusFilterButton from './FocusFilterButton'

const NavBar = () => (
  <nav className='filter-navbar'>
    <ul>
      <TaskFilterButton />
      <FocusFilterButton />
    </ul>
    <div className='clear' />
  </nav>
)

export default NavBar
