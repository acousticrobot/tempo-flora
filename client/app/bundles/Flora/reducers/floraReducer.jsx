import { combineReducers } from 'redux';
import { SET_TASK_VISIBILITY_FILTER } from '../constants/actionTypes';
import { SHOW_ALL } from '../constants/filterTypes';

const taskVisibility = (state=SHOW_ALL, action) => {
  switch (action.type) {
  case SET_TASK_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
};

const floraReducer = combineReducers({ taskVisibility });

export default floraReducer;

