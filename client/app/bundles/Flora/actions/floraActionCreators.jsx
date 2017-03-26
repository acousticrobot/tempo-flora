/* eslint-disable import/prefer-default-export */

import { ADD_TASK, COMPLETE_TASK, SET_TASK_VISIBILITY_FILTER } from '../constants/actionTypes';

export const addTask = (focusId, title) => ({
  type: ADD_TASK,
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
