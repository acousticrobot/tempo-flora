import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { addNewTask, enterNewTask, clearNewTask } from '../actions/floraActionCreators';

import AddTaskButton from '../components/Focus/AddTaskButton';
import AddTaskForm from './AddTaskForm';

let AddTaskContainer = ({ active, available, posted, openModal, addNewTask, clearNewTask, task, focusId }) => {
  if (available) {
    return <AddTaskButton openModal={ openModal } />;
  } else if (active) {
    return  (
      <AddTaskForm
        focusId={ focusId }
        clearNewTask={ clearNewTask }
        addNewTask={ addNewTask }
      />);
  } else if (posted) {
    return (<div>{ task.title }...</div>);
  }
  return <div></div>;
};

AddTaskContainer.propTypes = {
  active: PropTypes.bool.isRequired,
  available: PropTypes.bool.isRequired,
  posted: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  addNewTask: PropTypes.func.isRequired,
  clearNewTask: PropTypes.func.isRequired,
  focusId: PropTypes.string.isRequired,
  task: PropTypes.shape({
    focusId: PropTypes.string,
    title: PropTypes.string,
    points: PropTypes.number,
    isPosting: PropTypes.bool.isRequired,
  }).isRequired
};

const mapStateToProps = (state, ownProps) => {
  let task = state.flora.unsavedTask;

  return {
    task: task,
    focusId: ownProps.focusId,
    available: ! task.focusId,
    active: !task.isPosting && ownProps.focusId === task.focusId,
    posted: task.isPosting && ownProps.focusId === task.focusId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  openModal: () => {
    dispatch(enterNewTask(ownProps.focusId));
  },
  addNewTask: (title) => {
    dispatch(addNewTask(ownProps.focusId,title));
  },
  clearNewTask: () => {
    dispatch(clearNewTask());
  }
});

const AddTaskConnection = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTaskContainer);

export default AddTaskConnection;
