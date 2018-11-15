import React from 'react';
import TodoTaskList from './TodoTaskList';
import TodoSummary from './TodoSummary';

const TodoListDashBoardPage = () => (
  <div>
    <TodoSummary />
    <TodoTaskList />
  </div>
);

export default TodoListDashBoardPage;
