import React from 'react'
import PropTypes from 'prop-types'

import KeyItem from './KeyItem'

const deedsForFocus = (focus, deeds) => (
  deeds.filter(d => d.position === focus.position)
)

const Key = ({ day, foci }) => (
  <div className='graph--key'>
    {
      foci.map(focus => (
        <KeyItem
          key={ focus.position }
          focus={ focus }
          deeds={ deedsForFocus(focus, day.deeds) }
        />
      ))
    }
  </div>
)

Key.propTypes = {
  day: PropTypes.shape({
    startOfDay: PropTypes.string.isRequired,
    deeds: PropTypes.array.isRequired
  }).isRequired,
  foci: PropTypes.array.isRequired
}

export default Key
