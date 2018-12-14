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
    const { day, limits } = this.props
    const unit = 128
    const size = (day.totalPoints / limits.maxPoints) * (unit / 2)
    return ({
      width: unit,
      height: unit,
      data: {
        size
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
  }).isRequired
}

export default GraphInterface
