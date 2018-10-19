import React from 'react';
import { Query } from "react-apollo"

import TaskFilterButton from './TaskFilterButton'
import FocusFilterButton from './FocusFilterButton'

const NavBar = () => (
  <nav className='filter-navbar'>
    <ul>
     <TaskFilterButton/>
     <FocusFilterButton/>
    </ul>
    <div className='clear'></div>
  </nav>
);

export default NavBar;
