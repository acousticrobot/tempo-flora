import { connect } from 'react-redux';
import { setFocusVisibilityFilter } from '../actions/floraActionCreators';
import NavButton from '../components/NavButton';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.flora.focusVisibility.filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFocusVisibilityFilter(ownProps.filter, ownProps.focusId));
  }
});

const FocusFilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavButton);

export default FocusFilterLink;
