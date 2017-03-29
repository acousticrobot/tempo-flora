import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import RootQuery from  '../queries/RootQuery';
import CompleteTaskMutation from  '../mutations/CompleteTaskMutation';

import Dashboard from '../components/Dashboard';

class FloraContainer extends Component {

  handleCompleteTask(id) {
    this.props.CompleteTaskMutation({
      variables: { taskId: id }
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
      <Dashboard
        foci={ this.props.data.user.foci }
        filter={ this.props.flora.taskVisibility }
        completeTask={ (id) => this.handleCompleteTask(id) }
      />
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
