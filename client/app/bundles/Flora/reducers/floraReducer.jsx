import { combineReducers } from 'redux';
import { SAM_I_AM } from '../constants/floraConstants';

const name = (state='sam', action) => {
  switch (action.type) {
  case SAM_I_AM:
    return action.text;
  default:
    return state;
  }
};

const floraReducer = combineReducers({ name });

export default floraReducer;
