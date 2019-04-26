import React from 'react'
import PropTypes from 'prop-types'

import TaskFilterButton from './TaskFilterButton'
import FocusFilterButton from './FocusFilterButton'
import ThemeFilterButtons from './ThemeFilterButtons'
import OptionsFilterButton from './OptionsFilterButton'
import DayInput from './DayInput'

import { SHOW_MORE_OPTIONS, SHOW_STANDARD_OPTIONS } from '../../constants/filterTypes'

const NavBar = ({ theme, optionsFilter, onChangeOptions }) => {
  if (optionsFilter === SHOW_MORE_OPTIONS) {
    return (
      <nav className='options-nav'>
        <section>
          <OptionsFilterButton
            icon='delete'
            onClick={ () => (onChangeOptions(SHOW_STANDARD_OPTIONS)) }
          />
          <header>Options:</header>
          <ul>
            <TaskFilterButton />
            <FocusFilterButton />
            <DayInput />
          </ul>
        </section>
        <section>
          <header>Themes:</header>
          <ul>
            <ThemeFilterButtons userTheme={ theme } />
          </ul>
        </section>
        <div className='clear' />
      </nav>
    )
  }

  return (
    <nav className='options-nav'>
      <OptionsFilterButton
        icon='more'
        onClick={ () => (onChangeOptions(SHOW_MORE_OPTIONS)) }
      />

    </nav>
  )
}

NavBar.propTypes = {
  theme: PropTypes.string,
  optionsFilter: PropTypes.string,
  onChangeOptions: PropTypes.func.isRequired
}

NavBar.defaultProps = {
  theme: 'DEFAULT',
  optionsFilter: SHOW_STANDARD_OPTIONS
}

export default NavBar
