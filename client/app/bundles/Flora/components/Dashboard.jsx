import React, { PropTypes } from 'react';

import { SHOW_ALL_FOCI, SHOW_SINGLE_FOCUS } from '../constants/filterTypes';

import Focus from './Focus';
import NavBar from './NavBar';
import AddFocusContainer from '../containers/AddFocusContainer';

const getVisibleFoci = (foci, focusFilter) => {
  switch (focusFilter.filter) {
  case SHOW_ALL_FOCI:
    return foci;
  case SHOW_SINGLE_FOCUS:
    return foci.filter((f)=>(f.id === focusFilter.focusId));
  }
};


const Dashboard = ({foci, taskFilter, optionsFilter, focusFilter, completeTask, deleteTask, undoDeed}) => (
  <section className='dashboard'>

      <NavBar/>
      <section className="foci-container">
        {getVisibleFoci(foci,focusFilter).map((focus) =>
          <Focus
            key={ focus.id }
            focus={ focus }
            taskFilter={ taskFilter }
            optionsFilter={ optionsFilter }
            completeTask={ (id) => completeTask(id) }
            deleteTask={ (id) => deleteTask(id) }
            undoDeed={ (id) => undoDeed(id) }
          />
        )}
        <AddFocusContainer numFoci={ foci.length } />
      </section>
  </section>
);


Dashboard.propTypes = {
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  undoDeed: PropTypes.func.isRequired,
  foci: PropTypes.array.isRequired,
  focusFilter: PropTypes.shape({
    filter: PropTypes.string.isRequired,
    taskId: PropTypes.string
  }).isRequired,
  taskFilter: PropTypes.string,
  optionsFilter: PropTypes.string
};

export default Dashboard;
