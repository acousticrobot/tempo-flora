import React, { PropTypes } from 'react';

const AddTaskButton = ({ openModal })=> (

  // eslint-disable no-unused-vars
  <div
    className="focus-article--button"
    onClick={ () => { openModal(); }}
  > + Add Task
  </div>
);

AddTaskButton.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default AddTaskButton;
