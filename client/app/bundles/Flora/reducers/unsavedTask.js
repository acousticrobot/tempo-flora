import { ADD_NEW_TASK, CLEAR_NEW_TASK, ENTER_NEW_TASK } from '../constants/actionTypes';

const EmptyTask = {
  focusId: null,
  title: null,
  points: null,
  isPosting: false
};

const unsavedTask = (state=EmptyTask, action) => {
  switch (action.type) {
  case ENTER_NEW_TASK:
    return {
      ...state,
      focusId: action.focusId
    };
  case CLEAR_NEW_TASK:
    return EmptyTask;
  case ADD_NEW_TASK:
    return {
      ...state,
      focusId: action.focusId,
      title: action.title,
      isPosting: true
    };
  default:
    return state;
  }
};

export default unsavedTask;
