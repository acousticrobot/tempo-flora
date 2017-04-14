import { combineReducers } from 'redux';
import focusVisibility from './focusVisibility';
import taskVisibility from './taskVisibility';
import unsavedTask from './unsavedTask';
import unsavedFocus from './unsavedFocus';

const reducer = combineReducers({
  taskVisibility,
  focusVisibility,
  unsavedTask,
  unsavedFocus
});

export default reducer;
