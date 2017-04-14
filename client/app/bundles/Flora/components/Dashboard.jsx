import React, { PropTypes } from 'react';

import Focus from './Focus';
import NavBar from './NavBar';
import AddFocusContainer from '../containers/AddFocusContainer';

const Dashboard = ({foci, taskFilter, completeTask, undoDeed}) => (
  <section className='dashboard'>

      <NavBar/>
      <section className="foci-container">
        {foci.map((focus) =>
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
  taskFilter: PropTypes.string
};

export default Dashboard;
