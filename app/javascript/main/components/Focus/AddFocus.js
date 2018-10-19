import React, { Component } from 'react';

import AddFocusButton from './AddFocusButton';
import AddFocusForm from './AddFocusForm';

class AddFocus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      available: true,
      active: false,
      posted: false,
    }
    this.openFocusForm = this.openFocusForm.bind(this);
    this.closeFocusForm = this.closeFocusForm.bind(this);
  }

  openFocusForm() {
    this.setState({
      available: false,
      active: true
    });
  }

  closeFocusForm() {
    this.setState({
      available: true,
      active: false
    });
  }

  render() {
    if (this.state.available) {
      return <AddFocusButton openFocusForm={ this.openFocusForm } />
    } else if (this.state.active) {
      return (
        <AddFocusForm
          userId={ this.props.userId }
          closeFocusForm={ this.closeFocusForm } />
      )
    }
  }
}

export default AddFocus
