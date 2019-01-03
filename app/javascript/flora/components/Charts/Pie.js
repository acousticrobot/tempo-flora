import * as d3 from 'd3'

const arcGenerator = size => (
  d3.arc()
    .innerRadius(1)
    .outerRadius(size)
    .padAngle(0.01)
    .padRadius(100)
    .cornerRadius(20)
)

const color = d3.scaleOrdinal()
  .range(['hsl(82, 85%, 31%)', 'hsl(0, 100%, 67%)', 'hsl(30, 60%, 60%)', 'hsl(25, 50%, 38%)', 'pink', 'yellow'])

const arcData = (foci, totalPoints) => {
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
  const data = arcData(props.data.foci, props.data.points)
  const selection = d3.select(el).select('.d3-points')
  selection
    .attr('transform', `translate(${props.width / 2}, ${props.height / 2})`)
    .selectAll('path')
    .data(data)
    .enter()
    .append('path')
    .attr('d', arc)
    .style('fill', d => (color(d.position)))
}

export default Pie
