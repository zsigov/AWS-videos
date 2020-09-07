import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer'

//Use compose to make chrome devTools work with my solution.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//This is the main store of Redux. We keep the state of the site here.
const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware()
  ));

export default store