import React, { PropTypes } from 'react';
import { graphql } from 'react-apollo';

import AddTaskMutation from  '../mutations/AddTaskMutation';


const AddTaskForm = ({ focusId, clearNewTask, addNewTask, AddTaskMutation }) => {
  let titleInput, pointsInput;

  const CSS = (type='')=> (`form--${type} form--${type}_small`);

  const handleAddTask = (title, points)=> {
    addNewTask(title);
    AddTaskMutation({
      variables: { focusId: focusId, title: title, points: points }
    }).then(clearNewTask());// eslint-disable-line no-console
  };

  return (
    <article className="form form_small">
    <form>
      <label className={ CSS('label') } htmlFor="title-input">
        Task Description:
      </label>

      <input id="title-input" type="text" className={ CSS('input') } ref={node => {
        titleInput = node;
      }} />

      <label className={ CSS('label') } htmlFor="points-input">
        Points:
      </label>

      <input id="points-input" type="number" className={ CSS('input') } ref={node => {
        pointsInput = node;
      }} />

      <button
        className={ CSS('button') }
        onClick={ () => {
          handleAddTask(titleInput.value, parseInt(pointsInput.value));
        }}>
        Add Task
      </button>

      <button
        className={ CSS('button') }
        onClick={
          () => { clearNewTask();
        }}>
        Cancel
      </button>

    </form>
    </article>
  );
};

AddTaskForm.propTypes = {
  focusId: PropTypes.string.isRequired,
  addNewTask: PropTypes.func.isRequired,
  clearNewTask: PropTypes.func.isRequired,
  AddTaskMutation: PropTypes.func.isRequired
};

// mutations available through this.props
const AddTaskWithGraph =  graphql(AddTaskMutation, {
  name: 'AddTaskMutation'
})(AddTaskForm);


export default AddTaskWithGraph;
