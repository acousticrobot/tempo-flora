import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import ADD_TASK from '../../mutations/AddTask'


const AddTaskForm = ({ focusId, closeTaskForm }) => {
  let titleInput
  let pointsInput
  let points
  let repeatableInput

  const CSS = function (klasses) {
    let val = ''
    klasses.split(/\s/).forEach(
      klass => { val += ` form--${klass} form--${klass}_small` }
    )
    return val
  }

  const handleAddTask = (e, AddTask) => {
    e.preventDefault()
    points = parseInt(pointsInput.value)
    AddTask({
      variables: {
        focusId,
        points,
        title: titleInput.value,
        repeatable: repeatableInput.checked
      }
    })
    closeTaskForm()
  }

  return (
    <div className='add-task--form'>
      <Mutation mutation={ ADD_TASK }>
        {(AddTask, { loading, error }) => (
          <form onSubmit={ e => handleAddTask(e, AddTask) }>

            { loading && <p>Loading...</p> }
            { error && <p>Error :( Please try again</p> }

            <div className='add-task--form-row'>
              <input
                aria-label='Repeatable'
                id='repeatable-check'
                className={ CSS('input') }
                type='checkbox'
                ref={ node => { repeatableInput = node } }
              />

              <label className={ CSS('label') } htmlFor='title-input'>
                Title:
              </label>

              <input
                id='title-input'
                className={ CSS('input') }
                type='text'
                ref={ node => { titleInput = node } }
              />

              <label className={ CSS('label') } htmlFor='points-input'>
                Points:
              </label>

              <input
                id='points-input'
                className={ CSS('input') }
                type='number'
                pattern='[0-9]*'
                ref={ node => { pointsInput = node } }
              />
            </div>

            <div className='add-task--form-row'>
              <button type='submit' className={ CSS('button') }>
                Add Task
              </button>
              <button
                type='submit'
                className={ CSS('button') }
                onClick={ closeTaskForm }
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </Mutation>
    </div>
  )
}

AddTaskForm.propTypes = {
  focusId: PropTypes.string.isRequired,
  closeTaskForm: PropTypes.func.isRequired
}

export default AddTaskForm
