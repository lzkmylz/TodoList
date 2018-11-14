import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import PublicRoute from './PublicRoute';
import TodoListDashBoardPage from '../components/TodoListDashBoardPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <PublicRoute path="/" component={ TodoListDashBoardPage } exact />
        <Route component={ NotFoundPage } />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;