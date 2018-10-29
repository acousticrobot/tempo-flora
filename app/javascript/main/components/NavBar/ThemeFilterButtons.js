import React from 'react'
import { Query } from 'react-apollo'

import GET_THEMES_QUERY from '../../queries/Themes'

import NavBarButton from './Button'

const handleClick = (e, theme) => {
  e.preventDefault()
  document.documentElement.classList.add('color-theme-in-transition')
  document.documentElement.setAttribute('data-theme', theme)
  window.setTimeout(() => {
    document.documentElement.classList.remove('color-theme-in-transition')
  }, 1000)
}

const ThemeFilterButtons = () => (
  <Query query={ GET_THEMES_QUERY }>
    { ({ data: { themes } }) => (

      themes.options.map(option => (
        <NavBarButton
          key={ option }
          isActive
          onClick={ e => handleClick(e, option) }
          buttonText={ option }
        />
      ))
    ) }
  </Query>
)

export default ThemeFilterButtons
