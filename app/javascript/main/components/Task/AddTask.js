import React, { Component } from 'react'

import AddTaskButton from './AddTaskButton'
import AddTaskForm from './AddTaskForm'

class AddTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      available: true,
      active: false,
      posted: false,
    }
    this.openTaskForm = this.openTaskForm.bind(this)
    this.closeTaskForm = this.closeTaskForm.bind(this)
  }

  openTaskForm() {
    this.setState({
      available: false,
      active: true
    })
  }

  closeTaskForm() {
    this.setState({
      available: true,
      active: false
    })
  }

  render() {
    if (this.state.available) {
      return <AddTaskButton openTaskForm={ this.openTaskForm } />
    } else if (this.state.active) {
      return <AddTaskForm focusId={ this.props.focusId } closeTaskForm={ this.closeTaskForm } />
    }
  }
}

export default AddTask
