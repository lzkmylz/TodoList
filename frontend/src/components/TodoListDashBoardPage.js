import React from 'react';
import TodoTaskList from './TodoTaskList';
import TodoSummary from './TodoSummary';
import TodoListFilter from './TodoListFilter';

const TodoListDashBoardPage = () => (
  <div>
    <TodoSummary />
    <TodoListFilter />
    <TodoTaskList />
  </div>
);

export default TodoListDashBoardPage;
