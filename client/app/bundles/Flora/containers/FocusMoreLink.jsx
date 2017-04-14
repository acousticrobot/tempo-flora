import { connect } from 'react-redux';
import { SHOW_ALL_FOCI, SHOW_SINGLE_FOCUS } from '../constants/filterTypes';
import { setFocusVisibilityFilter } from '../actions/floraActionCreators';
import MoreButton from '../components/MoreButton';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.focusId === state.flora.focusVisibility.focusId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickActive: () => {
    dispatch(setFocusVisibilityFilter(SHOW_SINGLE_FOCUS, ownProps.focusId));
  },
  onClickInactive: () => {
    dispatch(setFocusVisibilityFilter(SHOW_ALL_FOCI));
  }
});

const FocusMoreLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoreButton);

export default FocusMoreLink;
