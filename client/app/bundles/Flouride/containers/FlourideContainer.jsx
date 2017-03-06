import React, { PropTypes, Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Focus from '../components/Focus';


class FlourideContainer extends Component {

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>);
    }

    if (this.props.data.error) {
      console.log(this.props.data.error); // eslint-disable-line no-console
      return (<div>An unexpected error occurred</div>);
    }

    return (
      <div>
          <h1>
            Hello { this.props.data.user.username }!
          </h1>
          <div>
            {this.props.data.user.foci.map((focus) =>
              <Focus key={focus.id} focus={focus} />
            )}
          </div>
      </div>
    );
  }
}

FlourideContainer.propTypes = {
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
})(FlourideContainer);
