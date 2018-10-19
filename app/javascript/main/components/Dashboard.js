import React from 'react'
import PropTypes from 'prop-types'
import { Query } from "react-apollo"

import FOCUS_FILTER_QUERY from '../queries/FocusFilter'
import { SHOW_ALL_FOCI, SHOW_SINGLE_FOCUS } from '../constants/filterTypes'

import Focus from './Focus'
import AddFocus from './Focus/AddFocus'
import NavBar from './NavBar'

const getVisibleFoci = (foci, focusFilter) => {
  switch (focusFilter.filter) {
  case SHOW_ALL_FOCI:
    return foci
  case SHOW_SINGLE_FOCUS:
    return foci.filter((f)=>(f.id === focusFilter.focusId))
  }
}

const Dashboard = ({foci, userId, optionsFilter}) => (
  <Query query={ FOCUS_FILTER_QUERY } >
    {({ data: { focusFilter }, client }) => {
      return (
        <section className='dashboard'>
            <NavBar/>
            <section className="foci-container">
              {getVisibleFoci(foci,focusFilter).map((focus) =>
                <Focus
                  key={ focus.id }
                  focus={ focus }
                  optionsFilter={ optionsFilter }
                />
              )}
              <AddFocus userId={ userId } />
            </section>
        </section>
      )
    }}
  </Query>
)

Dashboard.propTypes = {
  foci: PropTypes.array.isRequired,
  userId: PropTypes.number.isRequired,
  optionsFilter: PropTypes.string
}

export default Dashboard
