import React, { PropTypes } from 'react';

import Focus from './Focus';
import NavBar from './NavBar';
import AddFocusContainer from '../containers/AddFocusContainer';

const getVisibleFoci = (foci, fociFilter) => {
  switch (focusFilter) {
  case 'SHOW_ALL_FOCI':
    return tasks;
  case 'SHOW_ACTIVE_TASKS':
    return tasks;
  }
};


const Dashboard = ({foci, taskFilter, completeTask, undoDeed}) => (
  <section className='dashboard'>

      <NavBar/>
      <section className="foci-container">
        {getVisibleFoci(foci,focusFilter).map((focus) =>
          <Focus
            key={ focus.id }
            focus={ focus }
            taskFilter={ taskFilter }
            completeTask={ (id) => completeTask(id) }
            undoDeed={ (id) => undoDeed(id) }
          />
        )}
        <AddFocusContainer numFoci={ foci.length } />
      </section>
  </section>
);

Dashboard.propTypes = {
  completeTask: PropTypes.func.isRequired,
  undoDeed: PropTypes.func.isRequired,
  foci: React.PropTypes.array.isRequired,
  focusFilter: PropTypes.string,
  taskFilter: PropTypes.string
};

export default Dashboard;
