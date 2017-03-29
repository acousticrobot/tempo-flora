import React, { PropTypes } from 'react';

let AddTaskForm = ({ clearNewTask, addNewTask }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={ () => { addNewTask(input.value);}}>
        Add Todo
      </button>
      <button onClick={ () => { clearNewTask();}}>
        Cancel
      </button>
    </div>
  );
};

AddTaskForm.propTypes = {
  addNewTask: PropTypes.func.isRequired,
  clearNewTask: PropTypes.func.isRequired,
};

export default AddTaskForm;
