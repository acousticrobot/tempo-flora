import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { SHOW_SINGLE_FOCUS } from '../../constants/filterTypes'

import AddFocusButton from './AddFocusButton'
import AddFocusForm from './AddFocusForm'

class AddFocus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this.openFocusForm = this.openFocusForm.bind(this)
    this.closeFocusForm = this.closeFocusForm.bind(this)
  }

  openFocusForm() {
    this.setState({
      active: true
    })
  }

  closeFocusForm() {
    this.setState({
      active: false
    })
  }

  render() {
    const { focusFilter } = this.props
    const { active } = this.state
    if (focusFilter.filter === SHOW_SINGLE_FOCUS) {
      return <div />
    }
    if (active) {
      return (
        <AddFocusForm
          closeFocusForm={ this.closeFocusForm }
        />
      )
    }
    return <AddFocusButton openFocusForm={ this.openFocusForm } />
  }
}

AddFocus.propTypes = {
  focusFilter: PropTypes.object.isRequired
}


export default AddFocus
