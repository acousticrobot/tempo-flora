import React, { PropTypes, Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Focus from '../components/Focus';


class FloraContainer extends Component {

  handleCompleteTask(id) {
    console.log('samiam ' + id); // eslint-disable-line no-console
    this.props.CompleteTaskMutation({variables: { taskId: id }})
    .then(console.log('samidid'));// eslint-disable-line no-console
  }

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>);
    }

    if (this.props.data.error) {
      console.log(this.props.data.error); // eslint-disable-line no-console
      return (<div>An unexpected error occurred</div>);
    }

    return (
      <section className='foci-container'>
          <h4>
            username: [{ this.props.data.user.username }]
          </h4>

          {this.props.data.user.foci.map((focus) =>
            <Focus
              key={focus.id}
              focus={focus}
              completeTask={(id) => this.handleCompleteTask(id)}
            />
          )}

          <div className='clear'></div>
      </section>
    );
  }
}

FloraContainer.propTypes = {
  CompleteTaskMutation: PropTypes.func.isRequired,
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
        completed
        repeatable
      }
    }
  }
}`;

const CompleteTaskMutation = gql`
mutation completeTask($taskId: ID!){
  completeTask(input:{
    taskId: $taskId,
  }) {
    task {
      id,
      title,
      completed
    }
  }
}`;

export default graphql(RootQuery, {
  options: (ownProps) => ({
    variables: {
      userId: ownProps.userId
    }
  })
})(graphql(CompleteTaskMutation, {name: 'CompleteTaskMutation'})(FloraContainer));
