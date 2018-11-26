import React from 'react'
import PropTypes from 'prop-types'
import DeedTitle from './Title'

const Deed = ({ deed, deedsSince }) => (
  <li className='task-article task-article_completed'>
    <DeedTitle
      id={ deed.id }
      title={ deed.title }
      deedsSince={ deedsSince }
    />
    <div className='clear' />
  </li>
)

Deed.propTypes = {
  deed: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  deedsSince: PropTypes.string.isRequired
}

export default Deed
