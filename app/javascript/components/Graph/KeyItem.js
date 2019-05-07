import React from 'react'
import PropTypes from 'prop-types'

const Focus = ({ focus, deeds }) => {
  if (deeds.length > 0) {
    return (
      <section
        className={ `graph--deed-list chart--color-${focus.color}` }
      >
        <h3>{ focus.title }</h3>
        <ul>
          { deeds.map(deed => (
            <li key={ deed.id }>
              { deed.title }
              { deed.consecutiveDays > 1 &&
                ` (${deed.consecutiveDays})`
              }
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

export default Focus
