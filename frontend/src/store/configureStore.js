import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import filterReducer from '../reducers/filters';
import taskReducer from '../reducers/tasks';

export default () => {
  const store = createStore(
    combineReducers({
      filters: filterReducer,
      tasks: taskReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
};
