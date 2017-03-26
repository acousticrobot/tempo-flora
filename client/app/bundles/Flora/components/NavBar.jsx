import React from 'react';
import FilterLink from '../containers/FilterLink';
import { SHOW_ALL, SHOW_ACTIVE } from '../constants/filterTypes';

const NavBar = () => (
  <nav className='filter-navbar'>
    <ul>
      <FilterLink filter={SHOW_ALL}>
        Show All Tasks
      </FilterLink>
      <FilterLink filter={SHOW_ACTIVE}>
        Show Active Tasks
      </FilterLink>
    </ul>
    <div className='clear'></div>
  </nav>
);

export default NavBar;





