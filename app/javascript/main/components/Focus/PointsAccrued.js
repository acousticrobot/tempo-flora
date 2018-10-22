import React from 'react'
import PropTypes from 'prop-types'

const PointsAccrued = ({ points }) => (
  <div className='focus-item--points'>
    { points }
  </div>
)

PointsAccrued.propTypes = {
  points: PropTypes.number.isRequired
}

export default PointsAccrued
