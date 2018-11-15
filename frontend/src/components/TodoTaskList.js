import React from 'react';
import { connect } from 'react-redux';
import TodoTaskListItem from './TodoTaskListItem';
import selecttasks from '../selectors/selecttasks';

export const TodoTaskList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobil">待办事项</div>
      <div className="show-for-desktop">待办事项</div>
      <div className="show-for-desktop">时限</div>
    </div>
    <div className="list-body">
      {
        props.tasks.length === 0 ? (
          <div className="list-item list-item__message">
            <p>无待办事项</p>
          </div>
        ) : 
        (props.tasks.map((task) => {
          return <TodoTaskListItem key={task.id} {...task} />
        }))
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
      tasks: selecttasks(state.tasks, state.filters)
  };
};

export default connect(mapStateToProps)(TodoTaskList);