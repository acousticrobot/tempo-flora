import React from 'react'
import PropTypes from 'prop-types'

import Graph from './Graph'

class GraphInterface extends React.Component {
  componentDidMount() {
    Graph.create(
      this._rootNode,
      this.getData()
    )
  }

  componentDidUpdate() {
    Graph.update(
      this._rootNode,
      this.getData()
    )
  }

  componentWillUnmount() {
    Graph.destroy(this._rootNode)
  }

  getData() {
    const { day, maxPoints, foci } = this.props
    const unit = 200
    const size = (day.totalPoints / maxPoints) * (unit / 2)
    const fociData = foci.map(focus => {
      const deeds = day.deeds.filter(d => d.position === focus.position)
      let points = 0
      if (deeds.length) {
        points = deeds.map(deed => (deed.points)).reduce((a, b) => a + b)
      }
      return ({
        position: focus.position,
        color: focus.color,
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

  _setRef(componentNode) {
    this._rootNode = componentNode
  }

  render() {
    return <section className='graph--chart' ref={ this._setRef.bind(this) } />
  }
}

GraphInterface.propTypes = {
  day: PropTypes.shape({
    startOfDay: PropTypes.string.isRequired
  }).isRequired,
  maxPoints: PropTypes.number.isRequired,
  foci: PropTypes.array.isRequired
}

export default GraphInterface
