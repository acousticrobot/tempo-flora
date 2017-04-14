/* eslint-disable import/prefer-default-export */

import { ADD_NEW_FOCUS, CLEAR_NEW_FOCUS, ENTER_NEW_FOCUS,
         ADD_NEW_TASK, CLEAR_NEW_TASK, ENTER_NEW_TASK, COMPLETE_TASK,
         SET_FOCUS_VISIBILITY_FILTER, SET_TASK_VISIBILITY_FILTER } from '../constants/actionTypes';

// Open form to add task to a focus
export const enterNewFocus = () => ({
  type: ENTER_NEW_FOCUS,
});

export const clearNewFocus = () => ({
  type: CLEAR_NEW_FOCUS
});

export const addNewFocus = (title) => ({
  type: ADD_NEW_FOCUS,
  title
});

// Open form to add task to a focus
export const enterNewTask = (focusId) => ({
  type: ENTER_NEW_TASK,
  focusId
});

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

export const setTaskVisibilityFilter = (filter) => ({
  type: SET_TASK_VISIBILITY_FILTER,
  filter
});

export const setFocusVisibilityFilter = (filter, focusId) => ({
  type: SET_FOCUS_VISIBILITY_FILTER,
  filter,
  focusId
});
