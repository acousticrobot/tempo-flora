import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'

import CHANGE_DEED_POINTS from '../../mutations/ChangeDeedPoints'

const leftVal = points => (points > 0 ? points - 1 : points)
const rightVal = points => (points + 1)

const handleClick = (e, id, points, changeDeedPoints) => {
  changeDeedPoints({
    variables: {
      deedId: id,
      points
    }
  })
}

const DeedPoints = ({ id, points }) => (
  <Mutation mutation={ CHANGE_DEED_POINTS }>
    { changeDeedPoints => (
      <React.Fragment>
        <div className='task--icon task--title-icon'>
          <div
            className='icon icon-left-arrow'
            onClick={ e => handleClick(e, id, leftVal(points), changeDeedPoints) }
            onKeyPress={ e => handleClick(e, id, leftVal(points), changeDeedPoints) }
            role='button'
            tabIndex='0'
          />
        </div>

        <div className='task--item -completed'>
          { points }
        </div>

        <div className='task--icon task--title-icon'>
          <div
            className='icon icon-right-arrow'
            onClick={ e => handleClick(e, id, rightVal(points), changeDeedPoints) }
            onKeyPress={ e => handleClick(e, id, rightVal(points), changeDeedPoints) }
            role='button'
            tabIndex='0'
          />
        </div>
      </React.Fragment>

    )}
  </Mutation>
)

DeedPoints.propTypes = {
  id: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired
}

export default DeedPoints
