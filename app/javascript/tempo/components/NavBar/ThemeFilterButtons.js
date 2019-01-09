import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import GET_THEMES_QUERY from '../../queries/Themes'

import ThemeFilterButton from './ThemeFilterButton'

const ThemeFilterButtons = ({ userTheme }) => (
  <Query query={ GET_THEMES_QUERY }>
    { ({ data }) => (

      data.__type.enumValues.map(theme => (
        <ThemeFilterButton
          key={ theme.name }
          themeName={ theme.name }
          userTheme={ userTheme }
        />
      ))
    ) }
  </Query>
)

ThemeFilterButtons.propTypes = {
  userTheme: PropTypes.string
}

ThemeFilterButtons.defaultProps = {
  userTheme: 'DEFAULT'
}

export default ThemeFilterButtons
