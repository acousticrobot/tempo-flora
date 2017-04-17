import { SET_FOCUS_VISIBILITY_FILTER } from '../constants/actionTypes';

import { SHOW_SINGLE_FOCUS, SHOW_MORE_OPTIONS, SHOW_STANDARD_OPTIONS } from '../constants/filterTypes';

// Piggyback on changes to the visiblility of foci -- if only on visible,
// trigger more options to also be visible

const optionsVisibility = (state=SHOW_STANDARD_OPTIONS, action) => {
  switch (action.type) {
  case SET_FOCUS_VISIBILITY_FILTER:
    if (action.filter === SHOW_SINGLE_FOCUS) {
      return SHOW_MORE_OPTIONS;
    }
    return SHOW_STANDARD_OPTIONS;
  default:
    return state;
  }
};

export default optionsVisibility;
