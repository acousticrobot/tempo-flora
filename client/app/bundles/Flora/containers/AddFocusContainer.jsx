import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { addNewFocus, enterNewFocus, clearNewFocus } from '../actions/floraActionCreators';

import AddFocusButton from '../components/Focus/AddFocusButton';
import AddFocusForm from './AddFocusForm';

let AddFocusContainer = ({ active, available, openFocusForm, addNewFocus, clearNewFocus }) => {
  if (available) {
    return <AddFocusButton openFocusForm={ openFocusForm } />;
  } else if (active) {
    return  (
      <AddFocusForm
        clearNewFocus={ clearNewFocus }
        addNewFocus={ addNewFocus }
      />);
  }
  return <div></div>;
};

AddFocusContainer.propTypes = {
  numFoci: PropTypes.number.isRequired,
  active: PropTypes.bool,
  available: PropTypes.bool,
  openFocusForm: PropTypes.func.isRequired,
  addNewFocus: PropTypes.func.isRequired,
  clearNewFocus: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  let focus = state.flora.unsavedFocus;
  return {
    focus: focus,
    available: !focus.isActive && ownProps.numFoci < 5,
    active: focus.isActive
  };
};

const mapDispatchToProps = (dispatch) => ({
  openFocusForm: () => {
    dispatch(enterNewFocus());
  },
  addNewFocus: () => {
    dispatch(addNewFocus());
  },
  clearNewFocus: () => {
    dispatch(clearNewFocus());
  }
});

const AddFocusConnection = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFocusContainer);

export default AddFocusConnection;
