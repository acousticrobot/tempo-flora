import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import floraReducer from '../reducers/floraReducer';

const configureStore = (railsProps, apolloClient) => (
  createStore(
    combineReducers({
      railsProps,
      name: floraReducer,
      apollo: apolloClient.reducer(),
    }),
    railsProps, // initial state (doesn't persist?)
    compose(
        applyMiddleware(apolloClient.middleware()),
        // debug with redux devToolsExtension
        (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  )
);

export default configureStore;
