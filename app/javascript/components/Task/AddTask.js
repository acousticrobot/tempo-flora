import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AddTaskButton from './AddTaskButton'
import AddTaskForm from './AddTaskForm'

class AddTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this.openTaskForm = this.openTaskForm.bind(this)
    this.closeTaskForm = this.closeTaskForm.bind(this)
  }

  openTaskForm() {
    this.setState({
      active: true
    })
  }

  closeTaskForm() {
    this.setState({
      active: false
    })
  }

  render() {
    const { focusId } = this.props
    const { active } = this.state

    if (active) {
      return (
        <AddTaskForm
          focusId={ focusId }
          closeTaskForm={ this.closeTaskForm }
        />
      )
    }
    return <AddTaskButton openTaskForm={ this.openTaskForm } />
  }
}

AddTask.propTypes = {
  focusId: PropTypes.string.isRequired
}

export default AddTask
