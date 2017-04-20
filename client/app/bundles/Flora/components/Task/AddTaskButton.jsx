import React, { PropTypes } from 'react';

const AddTaskButton = ({ openTaskForm })=> (

  <div
    className="focus-article--button"
    onClick={ () => { openTaskForm(); }}
  > Add Task
  <div className="focus-article--button-icon plus"></div>
  </div>
);

AddTaskButton.propTypes = {
  openTaskForm: PropTypes.func.isRequired,
};

export default AddTaskButton;
