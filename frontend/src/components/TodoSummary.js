import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import selecttasks from '../selectors/selecttasks';

const minExpireDate = (tasks) => {
  return tasks.sort((a, b) => {
    return moment(a.expireDate).isBefore(moment(b.expireDate)) ? -1 : 1;
  })[0].expireDate;
};

export const TodoSummary = (props) => (
  <div className="page-header">
    <div className="content-container">
      <div className="page-header__title">
        <h1 className="page-header__totalTasks">
          {`共有${props.tasks.length}件待办事项`}
        </h1>
        {
          props.tasks.length > 0 ?
          (
            <h2 className="page-header__deadline show-for-desktop">
              {`最近的deadline日期为:${moment(minExpireDate(props.tasks)).format('YYYY-MM-DD')}`}
            </h2>
          ) : (
            <h2 className="page-header__freedom show-for-desktop">
              没有要做的事，可以快乐摸鱼了！
            </h2>
          )
        }
      </div>
      <div className="page-header_actions">
        <Link className="button" to="/create" >Add Task</Link>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
      tasks: selecttasks(state.tasks, state.filters)
  };
};

export default connect(mapStateToProps)(TodoSummary);
