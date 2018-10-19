import React from 'react'
import PropTypes from 'prop-types'
import DeedTitle from './Title'

const Deed = ({ deed }) => (
  <li className='task-article task-article_completed'>
    <DeedTitle
      id={ deed.id }
      title={ deed.title }
    />
    <div className='clear'></div>
  </li>
)

Deed.propTypes = {
  deed: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default Deed
