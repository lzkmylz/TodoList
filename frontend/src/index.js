import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';
import { startSetTasks } from './actions/tasks';
import { store } from './App';

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
      ReactDOM.render(<App />, document.getElementById('root'));
      hasRendered = true;
  }
};
ReactDOM.render(<LoadingPage />, document.getElementById('root'));

store.dispatch(startSetTasks()).then(() => {
  renderApp();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
