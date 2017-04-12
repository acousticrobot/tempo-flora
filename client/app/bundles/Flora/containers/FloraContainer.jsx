import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';

import RootQuery from  '../queries/RootQuery';
import CompleteTaskMutation from  '../mutations/CompleteTaskMutation';
import UndoDeedMutation from  '../mutations/UndoDeedMutation';

import Dashboard from '../components/Dashboard';

class FloraContainer extends Component {

  handleCompleteTask(id) {
    this.props.CompleteTaskMutation({
      variables: { taskId: id }
    }).then(()=>{
      console.log('task completed'); // eslint-disable-line no-console
    });
  }

  handleUndoDeed(id) {
    this.props.UndoDeedMutation({
      variables: { deedId: id }
    }).then(()=>{
      console.log('deed undone'); // eslint-disable-line no-console
    });
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
        undoDeed={ (id) => this.handleUndoDeed(id) }
      />
    );
  }
}

FloraContainer.propTypes = {
  flora: PropTypes.shape({
    taskVisibility: PropTypes.string
  }),
  CompleteTaskMutation: PropTypes.func.isRequired,
  UndoDeedMutation: PropTypes.func.isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    user: PropTypes.object,
  }).isRequired,
};

const QueryContainer = compose(
  // query results available through this.props.data
  graphql(RootQuery, {
    options: (ownProps) => ({
      variables: {
        userId: ownProps.userId
      }
    })
  }),
  // mutations available through this.props
  graphql(CompleteTaskMutation, {
    name: 'CompleteTaskMutation'
  }),
  graphql(UndoDeedMutation, {
    name: 'UndoDeedMutation'
  })
)(FloraContainer);

const QueryContainerWithState = connect(
  (state) => ({ flora: state.flora })
)(QueryContainer);

export default QueryContainerWithState;
