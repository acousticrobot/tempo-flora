import { SET_TASK_VISIBILITY_FILTER } from '../constants/actionTypes';

import { SHOW_ALL_TASKS } from '../constants/filterTypes';

const taskVisibility = (state=SHOW_ALL_TASKS, action) => {
  switch (action.type) {
  case SET_TASK_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
};

export default taskVisibility;
