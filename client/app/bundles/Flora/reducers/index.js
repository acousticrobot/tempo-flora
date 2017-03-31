import { combineReducers } from 'redux';
import taskVisibility from './taskVisibility';
import unsavedTask from './unsavedTask';
import unsavedFocus from './unsavedFocus';

const reducer = combineReducers({
  taskVisibility,
  unsavedTask,
  unsavedFocus
});

export default reducer;
