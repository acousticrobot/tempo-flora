import React, { PropTypes } from 'react';

const resolveUserName = (d)=> {
  if (d.user) {
    return d.user.username;
  }
}

const Sandbox = ({data}) => (
  <h1>
    Hello { resolveUserName(data) }!
  </h1>
);

Sandbox.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Sandbox;
