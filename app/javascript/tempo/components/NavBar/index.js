import React from 'react'
import PropTypes from 'prop-types'

import TaskFilterButton from './TaskFilterButton'
import FocusFilterButton from './FocusFilterButton'
import ThemeFilterButtons from './ThemeFilterButtons'

const NavBar = ({ theme }) => (
  <nav className='filter-navbar'>
    <ul>
      <TaskFilterButton />
      <FocusFilterButton />
      <ThemeFilterButtons userTheme={ theme } />
    </ul>
    <div className='clear' />
  </nav>
)

NavBar.propTypes = {
  theme: PropTypes.string
}

NavBar.defaultProps = {
  theme: 'DEFAULT'
}

export default NavBar
