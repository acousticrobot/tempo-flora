import * as d3 from 'd3'

const arcGenerator = size => (
  d3.arc()
    .innerRadius(1)
    .outerRadius(size)
    .padAngle(0.01)
    .padRadius(100)
    .cornerRadius(20)
)

const colorScale = foci => {
  const colorArray = foci.map(focus => focus.color)
  return d3.scaleOrdinal()
    .range(colorArray)
}

const arcData = (foci, totalPoints) => {
  if (totalPoints === 0) {
    return []
  }
  let lastAngle = 0
  const data = foci.map(focus => {
    const startAngle = lastAngle
    const endAngle = lastAngle + (focus.points / totalPoints * 2 * Math.PI)
    lastAngle = endAngle
    return {
      position: focus.position,
      startAngle,
      endAngle
    }
  })
  return data
}

const Pie = {}

Pie.draw = function draw(el, props) {
  const arc = arcGenerator(props.data.size)
  const color = colorScale(props.data.foci)
  const data = arcData(props.data.foci, props.data.points)
  const selection = d3.select(el).select('.d3-points')

  selection
    .attr('transform', `translate(${props.width / 2}, ${props.height / 2})`)
    .selectAll('path')
    .data(data)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('class', p => `chart--color-${ color(p.position) }`)
}

export default Pie
