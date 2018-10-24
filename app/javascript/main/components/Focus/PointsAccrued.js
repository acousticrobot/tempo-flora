import React from 'react'
import PropTypes from 'prop-types'

const PointsAccrued = ({ points }) => (
  <footer className='focus-item--points'>
    { points }
  </footer>
)

PointsAccrued.propTypes = {
  points: PropTypes.number.isRequired
}

export default PointsAccrued
