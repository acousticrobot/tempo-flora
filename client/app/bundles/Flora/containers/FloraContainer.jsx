import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';

import RootQuery from  '../queries/RootQuery';
import CompleteTaskMutation from  '../mutations/CompleteTaskMutation';
import UndoDeedMutation from  '../mutations/UndoDeedMutation';
import DeleteTaskMutation from  '../mutations/DeleteTaskMutation';

import Dashboard from '../components/Dashboard';

class FloraContainer extends Component {

  handleCompleteTask(id) {
    this.props.CompleteTaskMutation({
      variables: { taskId: id }
    }).then(()=>{
      console.log('task completed'); // eslint-disable-line no-console
    });
  }

  handleDeleteTask(id) {
    this.props.DeleteTaskMutation({
      variables: { taskId: id }
    }).then(()=>{
      console.log('task deleted'); // eslint-disable-line no-console
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
        taskFilter={ this.props.flora.taskVisibility }
        focusFilter={ this.props.flora.focusVisibility }
        optionsFilter={ this.props.flora.optionsVisibility }
        completeTask={ (id) => this.handleCompleteTask(id) }
        deleteTask={ (id) => this.handleDeleteTask(id) }
        undoDeed={ (id) => this.handleUndoDeed(id) }
      />
    );
  }
}

FloraContainer.propTypes = {
  flora: PropTypes.shape({
    focusVisibility: PropTypes.shape({
      filter: PropTypes.string.isRequired,
      taskId: PropTypes.string
    }),
    taskVisibility: PropTypes.string,
    optionsVisibility: PropTypes.string,
  }),
  CompleteTaskMutation: PropTypes.func.isRequired,
  DeleteTaskMutation: PropTypes.func.isRequired,
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
  graphql(DeleteTaskMutation, {
    name: 'DeleteTaskMutation'
  }),
  graphql(UndoDeedMutation, {
    name: 'UndoDeedMutation'
  })
)(FloraContainer);

const QueryContainerWithState = connect(
  (state) => ({ flora: state.flora })
)(QueryContainer);

export default QueryContainerWithState;
