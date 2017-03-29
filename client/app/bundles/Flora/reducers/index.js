import { combineReducers } from 'redux';
import taskVisibility from './taskVisibility';
import unsavedTask from './unsavedTask';

const reducer = combineReducers({
  taskVisibility,
  unsavedTask
});

export default reducer;
