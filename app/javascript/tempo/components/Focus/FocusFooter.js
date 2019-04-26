import React from 'react'
import PropTypes from 'prop-types'

import AddTask from '../Task/AddTask'

const FocusFooter = ({ focusId }) => (
  <footer className='focus-item--footer'>
    <AddTask focusId={ focusId } />
  </footer>
)

FocusFooter.propTypes = {
  focusId: PropTypes.string.isRequired
}

export default FocusFooter
