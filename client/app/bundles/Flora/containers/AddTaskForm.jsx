import React, { PropTypes } from 'react';
import { graphql } from 'react-apollo';

import AddTaskMutation from  '../mutations/AddTaskMutation';


const AddTaskForm = ({ focusId, clearNewTask, addNewTask, AddTaskMutation }) => {
  let titleInput, pointsInput, repeatableInput;

  const CSS = (type='')=> (`form--${type} form--${type}_small`);

  const handleAddTask = (title, points, repeatable)=> {
    addNewTask(title);
    AddTaskMutation({
      variables: { focusId, title, points, repeatable }
    }).then(() => {
      clearNewTask();
    }).catch((error) => {
      console.log('there was an error sending the query', error); // eslint-disable-line no-console
      clearNewTask();
    });
  };

  return (
    <article className="form form_small">
    <form onSubmit={ e => {
      e.preventDefault();
      handleAddTask(titleInput.value, parseInt(pointsInput.value), repeatableInput.checked);
    }}>
      <label className={ CSS('label') } htmlFor="title-input">
        Task Description:
      </label>
      <input id="title-input" type="text" className={ CSS('input') } ref={node => {
        titleInput = node;
      }} />

      <label className={ CSS('label') } htmlFor="points-input">
        Points:
      </label>
      <input id="points-input" type="number" pattern="[0-9]*" className={ CSS('input') } ref={node => {
        pointsInput = node;
      }} />

      <input id="repeatable-check" type="checkbox" className={ CSS('input') } ref={node => {
        repeatableInput = node;
      }} />
      <label className={ CSS('label') } className={ CSS('checkbox-label') } htmlFor="repeatable-check">
        Repeatable
      </label>

      <div className="clear"></div>

      <button type="submit" className={ CSS('button') } >
        Add Task
      </button>

      <button
        className={ CSS('button') }
        onClick={ () => { clearNewTask(); }}>
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
