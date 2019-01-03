import * as d3 from 'd3'

import Chart from '../Charts/Pie'

const Graph = {}

// https://www.smashingmagazine.com/2018/02/react-d3-ecosystem/
// http://nicolashery.com/integrating-d3js-visualizations-in-a-react-app/

Graph.create = function create(el, props) {
  const svg = d3.select(el).append('svg')
    .attr('class', 'flora-day--graph')
    .attr('width', props.width)
    .attr('height', props.height)

  svg.append('g').attr('class', 'd3-points')
  this.update(el, props)
}

Graph.update = function upate(el, props) {
  this._draw(el, props)
}

Graph.destroy = function destroy() {
  // cleanup
}

Graph._draw = function _draw(el, props) {
  Chart.draw(el, props)
}

export default Graph
