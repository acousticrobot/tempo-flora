import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Graph from './Graph'

class GraphInterface extends React.Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this)
    Graph.create(el, this.getData())
  }

  componentDidUpdate() {
    const el = ReactDOM.findDOMNode(this)
    Graph.upate(el, this.getData())
  }

  componentWillUnmount() {
    const el = ReactDOM.findDOMNode(this)
    Graph.destroy(el)
  }

  getData() {
    const { day, limits, foci } = this.props
    const unit = 256
    const size = (day.totalPoints / limits.maxPoints) * (unit / 2)
    const fociData = foci.map(focus => {
      const deeds = day.deeds.filter(d => d.position === focus.position)
      let points = 0
      if (deeds.length) {
        points = deeds.map(deed => (deed.points)).reduce((a, b) => a + b)
      }
      return ({
        position: focus.position,
        deeds,
        points
      })
    })

    return ({
      width: unit,
      height: unit,
      data: {
        size,
        points: day.totalPoints,
        foci: fociData
      }
    })
  }

  render() {
    return <section className='flora-day--foci' />
  }
}

GraphInterface.propTypes = {
  day: PropTypes.shape({
    startOfDay: PropTypes.string.isRequired
  }).isRequired,
  limits: PropTypes.shape({
    maxPoints: PropTypes.number.isRequired
  }).isRequired,
  foci: PropTypes.shape.isRequired
}

export default GraphInterface
