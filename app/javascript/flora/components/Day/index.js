import React from 'react'
import PropTypes from 'prop-types'

import GraphInterface from './GraphInterface'

const formattedDate = startOfDay => (new Date(startOfDay).toLocaleDateString())
const weekday = startOfDay => (new Date(startOfDay).toLocaleDateString('en-US', { weekday: 'long' }))

const deedsForFocus = (focus, deeds) => (
  deeds.filter(d => d.position === focus.position)
)

const Focus = ({ focus, deeds }) => {
  if (deeds.length > 0) {
    return (
      <section
        className={ `flora-day--deed-list chart--color-${focus.color}` }
      >
        <h3>{ focus.title }</h3>
        <ul>
          { deeds.map(deed => (
            <li key={ deed.id }>
              { deed.title }
            </li>
          ))}
        </ul>
      </section>
    )
  }
  return <div />
}

Focus.propTypes = {
  focus: PropTypes.shape({
    title: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired
  }).isRequired,
  deeds: PropTypes.array.isRequired
}

Focus.defaultProps = {

}

const Day = ({ day, foci, limits }) => (
  <article className='flora-day'>
    <header>
      <h1>{ formattedDate(day.startOfDay) }</h1>
      <h2>{ weekday(day.startOfDay) }</h2>
    </header>

    <GraphInterface day={ day } foci={ foci } limits={ limits } />
    <div className='flora-day--key'>
      {
        foci.map(focus => (
          <Focus
            key={ focus.position }
            focus={ focus }
            deeds={ deedsForFocus(focus, day.deeds) }
          />
        ))
      }
    </div>
  </article>
)

Day.propTypes = {
  day: PropTypes.shape({
    startOfDay: PropTypes.string.isRequired,
    deeds: PropTypes.array.isRequired
  }).isRequired,
  foci: PropTypes.array.isRequired,
  limits: PropTypes.shape({
    maxPoints: PropTypes.number.isRequired
  }).isRequired
}

export default Day
