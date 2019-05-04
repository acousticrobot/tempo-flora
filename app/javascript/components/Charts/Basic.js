import * as d3 from 'd3'


const Basic = {}

Basic.draw = function draw(el, props) {
  const selection = d3.select(el).select('.d3-points')
  selection.attr('transform', `translate(${props.width / 2}, ${props.height / 2})`).append('circle').attr('r', props.data.size)
}

export default Basic
