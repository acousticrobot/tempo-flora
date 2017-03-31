import React, { PropTypes } from 'react';

import Focus from './Focus';
import NavBar from './NavBar';
import AddFocusContainer from '../containers/AddFocusContainer';

const Dashboard = ({foci, filter, completeTask}) => (
  <section className='dashboard'>

      <NavBar/>
      <section className="foci-container">
        {foci.map((focus) =>
          <Focus
            key={ focus.id }
            focus={ focus }
            filter={ filter }
            completeTask={ (id) => completeTask(id) }
          />
        )}
        <AddFocusContainer numFoci={ foci.length } />
      </section>
  </section>
);

Dashboard.propTypes = {
  completeTask: PropTypes.func.isRequired,
  foci: React.PropTypes.array.isRequired,
  filter: PropTypes.string
};

export default Dashboard;
