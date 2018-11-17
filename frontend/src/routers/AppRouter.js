import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import PublicRoute from './PublicRoute';
import TodoListDashBoardPage from '../components/TodoListDashBoardPage';
import AddTaskPage from '../components/AddTaskPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <PublicRoute path="/" component={ TodoListDashBoardPage } exact />
        <PublicRoute path="/create" component={ AddTaskPage } />
        <Route component={ NotFoundPage } />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;