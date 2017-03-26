import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import floraReducer from '../reducers/floraReducer';

const configureStore = (railsProps, apolloClient) => (
  createStore(
    combineReducers({
      flora: floraReducer,
      apollo: apolloClient.reducer(),
    }),
    {}, // initial state
    compose(
        applyMiddleware(apolloClient.middleware()),
        // debug with redux devToolsExtension
        (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  )
);

export default configureStore;
