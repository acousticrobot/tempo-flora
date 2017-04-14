import { connect } from 'react-redux';
import { setTaskVisibilityFilter } from '../actions/floraActionCreators';
import NavButton from '../components/NavButton';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.flora.taskVisibility
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setTaskVisibilityFilter(ownProps.filter));
  }
});

const TaskFilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavButton);

export default TaskFilterLink;
