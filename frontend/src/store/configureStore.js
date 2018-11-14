import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import filterReducer from '../reducers/filters';
import taskReducer from '../reducers/tasks';

export default () => {
  const store = createStore(
    combineReducers([
      filterReducer,
      taskReducer
    ]),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
