import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from "react-apollo";
import ADD_TASK from '../../mutations/AddTask'


const AddTaskForm = ({ focusId, closeTaskForm }) => {
  let titleInput, pointsInput, points, repeatableInput;

  const CSS = (type='') => (`form--${type} form--${type}_small`);

  const handleAddTask = (e, AddTask) => {
    e.preventDefault()
    points = parseInt(pointsInput.value)
    AddTask({
      variables: {
        focusId   : focusId,
        title     : titleInput.value,
        points    : points,
        repeatable: repeatableInput.checked
      }
    })
    closeTaskForm()
  }

  return (
    <article className="form form_small">
      <Mutation mutation={ ADD_TASK }>
        {(AddTask, { loading, error }) => (
          <form onSubmit={ e => handleAddTask(e, AddTask) }>
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
              onClick={ () => { closeTaskForm() }}>
              Cancel
            </button>
          </form>
        )}
      </Mutation>
    </article>
  );
};

export default AddTaskForm;
