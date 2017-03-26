import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
//import update from 'immutability-helper';

import Focus from '../components/Focus';
import NavBar from '../components/NavBar';

class FloraContainer extends Component {

  handleCompleteTask(id) {
    this.props.CompleteTaskMutation({
      variables: { taskId: id },
      // updateQueries: {
      //   RootQuery: (prev, {mutationResult}) => {
      //     const updatedFocus = mutationResult.data.completeTask.focus;

      //     return update(prev, {
      //       user: {
      //         foci: {
      //           $merge: [updatedFocus],
      //         }
      //       }
      //     });
      //   }
      // }
    }).then(console.log('samidid'));// eslint-disable-line no-console
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
          <h4>Areas of Focus:</h4>
          <NavBar/>

          {this.props.data.user.foci.map((focus) =>
            <Focus
              key={ focus.id }
              focus={ focus }
              filter={ this.props.flora.taskVisibility }
              completeTask={ (id) => this.handleCompleteTask(id) }
            />
          )}

          <div className='clear'></div>
      </section>
    );
  }
}

FloraContainer.propTypes = {
  flora: PropTypes.shape({
    taskVisibility: PropTypes.string
  }),
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
    _id
    username
    foci {
      id
      _id
      title
      position
      tasks {
        id
        _id
        title
        points
        completed
        repeatable
      }
    }
  }
}`;

const CompleteTaskMutation = gql`
mutation completeTask($taskId: ID!) {
  completeTask(input: {taskId: $taskId}) {
    focus {
      _id
      tasks {
        id
        _id
        title
        points
        completed
        repeatable
      }
    }
  }
}`;

// Wrap the container within Apollo's
// graphQL query and mutations.
const QueryContainer =
  // query results available through this.props.data
  graphql(RootQuery, {
    options: (ownProps) => ({
      variables: {
        userId: ownProps.userId
      }
    })
  })(
  // mutations available through this.props
  graphql(CompleteTaskMutation, {
    name: 'CompleteTaskMutation'
  })(FloraContainer));

const QueryContainerWithState = connect(
  (state) => ({ flora: state.flora })
)(QueryContainer);

export default QueryContainerWithState;
