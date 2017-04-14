import React from 'react';
import TaskFilterLink from '../containers/TaskFilterLink';
import FocusFilterLink from '../containers/FocusFilterLink';
import { SHOW_ALL_TASKS, SHOW_ACTIVE_TASKS, SHOW_All_FOCI } from '../constants/filterTypes';

const NavBar = () => (
  <nav className='filter-navbar'>
    <ul>
      <TaskFilterLink filter={SHOW_ALL_TASKS}>
        Show All Tasks
      </TaskFilterLink>
      <TaskFilterLink filter={SHOW_ACTIVE_TASKS}>
        Show Active Tasks
      </TaskFilterLink>
      <FocusFilterLink filter={SHOW_All_FOCI}>
        Show Every Focus
      </FocusFilterLink>
    </ul>
    <div className='clear'></div>
  </nav>
);

export default NavBar;
