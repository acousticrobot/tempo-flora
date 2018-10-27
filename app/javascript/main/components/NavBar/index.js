import React from 'react'

import TaskFilterButton from './TaskFilterButton'
import FocusFilterButton from './FocusFilterButton'
import ThemeFilterButtons from './ThemeFilterButtons'

const NavBar = () => (
  <nav className='filter-navbar'>
    <ul>
      <TaskFilterButton />
      <FocusFilterButton />
      <ThemeFilterButtons />
    </ul>
    <div className='clear' />
  </nav>
)

export default NavBar
