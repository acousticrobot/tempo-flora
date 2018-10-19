import React from 'react'
import { Query } from "react-apollo"
import gql from 'graphql-tag'

import ROOT_QUERY from  '../queries/RootQuery'

import Dashboard from '../components/Dashboard'
import Focus from '../components/Focus'
import Task from '../components/Task'
import Deed from '../components/Deed'
import AddTask from '../components/Task/AddTask'
import TaskTitle from '../components/Task/Title'
import TaskPoints from '../components/Task/Points'

import {SHOW_MORE_OPTIONS} from '../constants/filterTypes'
import { SHOW_ALL_TASKS, SHOW_ACTIVE_TASKS } from '../constants/filterTypes'
import { SHOW_ALL_FOCI, SHOW_SINGLE_FOCUS } from '../constants/filterTypes'

const FloraContainer = ({ userId })=> (
  <Query query={ ROOT_QUERY } variables={{ userId }} >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return (
        <Dashboard
          foci={ data.user.foci }
          userId={ userId }
          optionsFilter={ SHOW_MORE_OPTIONS }
        />
      )
    }}
  </Query>
)

export default FloraContainer
