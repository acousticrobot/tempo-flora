import React from 'react'
import PropTypes from 'prop-types'
import DeedTitle from './Title'

const Deed = ({ deed, deedsSince }) => (
  <li className='focus-item'>
    <article className='task -completed'>
      <DeedTitle
        id={ deed.id }
        title={ deed.title }
        deedsSince={ deedsSince }
      />
    </article>
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
