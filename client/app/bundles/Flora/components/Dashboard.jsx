import React, { PropTypes } from 'react';

import Focus from './Focus';
import NavBar from './NavBar';

const Dashboard = ({foci, filter, completeTask}) => (
  <section className='foci-container'>
      <h4>Areas of Focus:</h4>
      <NavBar/>

      {foci.map((focus) =>
        <Focus
          key={ focus.id }
          focus={ focus }
          filter={ filter }
          completeTask={ (id) => completeTask(id) }
        />
      )}

      <div className='clear'></div>
  </section>
);

Dashboard.propTypes = {
  completeTask: PropTypes.func.isRequired,
  foci: React.PropTypes.array.isRequired,
  filter: PropTypes.string
};

export default Dashboard;
