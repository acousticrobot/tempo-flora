import React from 'react';
import { Query } from "react-apollo"

import TASK_FILTER_QUERY from '../../queries/TaskFilter'
import { SHOW_ALL_TASKS, SHOW_ACTIVE_TASKS } from '../../constants/filterTypes';

import NavBarButton from './Button'

const buttonText = (filter) => {
  switch (filter) {
  case SHOW_ALL_TASKS:
    return "Show Active Tasks"
  case SHOW_ACTIVE_TASKS:
    return "Show All Tasks"
  }
}

const handleTaskToggle = (e, taskFilter, client) => {
  e.preventDefault()
  let nextState = taskFilter == SHOW_ALL_TASKS ? SHOW_ACTIVE_TASKS : SHOW_ALL_TASKS
  client.writeData({ data: { taskFilter: nextState } })
}

const TaskFilterButton = () => (
  <Query query={ TASK_FILTER_QUERY } >
    {({ data: { taskFilter }, client }) => {
      return (
        <NavBarButton
          isActive={ true }
          onClick={ e => handleTaskToggle(e, taskFilter, client) }
          buttonText={ buttonText(taskFilter)}
        />
      )
    }}
  </Query>
)

export default TaskFilterButton;
