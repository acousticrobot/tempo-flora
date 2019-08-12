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
    const { deeds, totalPoints, maxPoints, foci } = this.props
    const unit = 200
    const size = (totalPoints / maxPoints) * (unit / 2)
    const fociData = foci.map(focus => {
      const deedsForFocus = deeds.filter(d => d.position === focus.position)
      let points = 0
      if (deedsForFocus.length) {
        points = deedsForFocus.map(deed => (deed.points)).reduce((a, b) => a + b)
      }
      return ({
        position: focus.position,
        color: focus.color,
        deeds: deedsForFocus,
        points
      })
    })

    return ({
      width: unit,
      height: unit,
      data: {
        size,
        points: totalPoints,
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
  deeds: PropTypes.array.isRequired,
  totalPoints: PropTypes.number.isRequired,
  maxPoints: PropTypes.number.isRequired,
  foci: PropTypes.array.isRequired
}

export default GraphInterface
