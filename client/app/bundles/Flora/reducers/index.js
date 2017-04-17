import { combineReducers } from 'redux';
import focusVisibility from './focusVisibility';
import optionsVisibility from './optionsVisibility';
import taskVisibility from './taskVisibility';
import unsavedTask from './unsavedTask';
import unsavedFocus from './unsavedFocus';

const reducer = combineReducers({
  focusVisibility,
  optionsVisibility,
  taskVisibility,
  unsavedFocus,
  unsavedTask
});

export default reducer;
