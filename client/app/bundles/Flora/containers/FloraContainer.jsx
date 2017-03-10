import React, { PropTypes, Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Focus from '../components/Focus';


class FloraContainer extends Component {

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>);
    }

    if (this.props.data.error) {
      console.log(this.props.data.error); // eslint-disable-line no-console
      return (<div>An unexpected error occurred</div>);
    }

    return (
      <section className="foci-container">
          <h4>
            username: [{ this.props.data.user.username }]
          </h4>

          {this.props.data.user.foci.map((focus) =>
            <Focus key={focus.id} focus={focus} />
          )}
          <div className="clear"></div>
      </section>
    );
  }
}

FloraContainer.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    user: PropTypes.object,
  }).isRequired,
};

const RootQuery = gql`
query RootQuery($userId: ID!) {
  user(id: $userId) {
    id
    username
    foci {
      id
      title
      position
      tasks {
        id
        title
        points
        repeatable
      }
    }
  }
}`;

export default graphql(RootQuery, {
  options: (ownProps) => ({
    variables: {
      userId: ownProps.userId
    }
  })
})(FloraContainer);
