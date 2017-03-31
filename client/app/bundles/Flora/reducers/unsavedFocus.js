import { ADD_NEW_FOCUS, CLEAR_NEW_FOCUS, ENTER_NEW_FOCUS } from '../constants/actionTypes';

const EmptyFocus = {
  title: null
};

const unsavedFocus = (state=EmptyFocus, action) => {
  switch (action.type) {
  case ENTER_NEW_FOCUS:
    return {
      ...state,
      isActive: true
    };
  case CLEAR_NEW_FOCUS:
    return EmptyFocus;
  case ADD_NEW_FOCUS:
    return {
      ...state,
      title: action.title,
      isActive: false,
      isPosting: true
    };
  default:
    return state;
  }
};

export default unsavedFocus;
