import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    const { userId } = this.props
    const { active } = this.state

    if (active) {
      return (
        <AddFocusForm
          userId={ userId }
          closeFocusForm={ this.closeFocusForm }
        />
      )
    }
    return <AddFocusButton openFocusForm={ this.openFocusForm } />
  }
}

AddFocus.propTypes = {
  userId: PropTypes.number.isRequired
}


export default AddFocus
