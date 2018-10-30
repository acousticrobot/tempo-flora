import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'

import CHANGE_THEME from '../../mutations/ChangeTheme'
import NavBarButton from './Button'

const handleClick = (e, ChangeTheme, name) => {
  e.preventDefault()
  ChangeTheme({ variables: { name } })
  document.documentElement.classList.add('color-theme-in-transition')
  document.documentElement.setAttribute('data-theme', name)
  window.setTimeout(() => {
    document.documentElement.classList.remove('color-theme-in-transition')
  }, 1000)
}

const ThemeFilterButton = ({ themeName, userTheme }) => (
  <Mutation mutation={ CHANGE_THEME }>
    { ChangeTheme => (
      <NavBarButton
        isActive={ themeName !== userTheme }
        onClick={ e => handleClick(e, ChangeTheme, themeName) }
        buttonText={ themeName }
      />
    )
  }
  </Mutation>
)

ThemeFilterButton.propTypes = {
  userTheme: PropTypes.string,
  themeName: PropTypes.string.isRequired
}

ThemeFilterButton.defaultProps = {
  userTheme: 'DEFAULT'
}

export default ThemeFilterButton
