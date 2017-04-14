import { SET_FOCUS_VISIBILITY_FILTER } from '../constants/actionTypes';

import { SHOW_ALL_FOCI, SHOW_SINGLE_FOCUS } from '../constants/filterTypes';

const FocusFilter = {
  focusId: null,
  filter: SHOW_ALL_FOCI
}

const focusVisibility = (state=FocusFilter, action) => {
  switch (action.type) {
  case SET_FOCUS_VISIBILITY_FILTER:
    return {
      ...state,
      focusId: action.focusId,
      filter: action.filter
    };
  default:
    return state;
  }
};

export default focusVisibility;
