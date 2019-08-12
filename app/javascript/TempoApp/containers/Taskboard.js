import React from 'react'
import PropTypes from 'prop-types'

import { SHOW_MORE_OPTIONS } from '../../constants/filterTypes'

import Foci from '../../components/Focus/Foci'
import NavBar from '../../components/NavBar'
import DayPicker from '../../components/Calendar/DayPicker'

const Taskboard = ({ foci, theme, optionsFilter, onChangeOptions, focusFilter, targetDate }) => (
  <article className='taskboard'>
    <NavBar
      theme={ theme }
      optionsFilter={ optionsFilter }
      onChangeOptions={ onChangeOptions }
    />
    <section className='taskboard-items'>

      { optionsFilter === SHOW_MORE_OPTIONS &&
        <DayPicker
          foci={ foci }
        />
      }

      <Foci
        foci={ foci }
        targetDate={ targetDate }
        focusFilter={ focusFilter }
        optionsFilter={ optionsFilter }
      />
    </section>
  </article>
)

Taskboard.propTypes = {
  foci: PropTypes.array.isRequired,
  theme: PropTypes.string,
  optionsFilter: PropTypes.string.isRequired,
  onChangeOptions: PropTypes.func.isRequired,
  focusFilter: PropTypes.object.isRequired,
  targetDate: PropTypes.string.isRequired
}

Taskboard.defaultProps = {
  theme: 'DEFAULT'
}

export default Taskboard
