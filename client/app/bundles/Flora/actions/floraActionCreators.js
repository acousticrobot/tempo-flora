/* eslint-disable import/prefer-default-export */

import { ADD_NEW_TASK, CLEAR_NEW_TASK, ENTER_NEW_TASK, COMPLETE_TASK, SET_TASK_VISIBILITY_FILTER } from '../constants/actionTypes';

// Open modal to add task to a focus
export const enterNewTask = (focusId) => ({
  type: ENTER_NEW_TASK,
  focusId
});

// Open modal to add task to a focus
export const clearNewTask = () => ({
  type: CLEAR_NEW_TASK
});

export const addNewTask = (focusId, title) => ({
  type: ADD_NEW_TASK,
  focusId,
  title
});

export const completeTask = (taskId) => ({
  type: COMPLETE_TASK,
  taskId
});

export const setVisibilityFilter = (filter) => ({
  type: SET_TASK_VISIBILITY_FILTER,
  filter
});
