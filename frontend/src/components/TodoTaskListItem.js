import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { startEditTask } from '../actions/tasks';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
/* 
Task data structure:
1 task id
2 task start date
3 task expire date
4 task level (0: normal, 1: important, 2: urgent)
5 task title
6 task description
*/

const levelMap = {
  0: "优先级：普通",
  1: "优先级：重要",
  2: "优先级：紧急",
};

const stateMap = {
  0: '未完成',
  1: '已完成',
}

export class TodoTaskListItem extends React.Component {

  onClickFinish = (e) => {
    this.props.editTask({
      ...this.props.task,
      isFinish: "1",
    });
    e.preventDefault();
  }

  onClickUnFinish = (e) => {
    this.props.editTask({
      ...this.props.task,
      isFinish: "0",
    });
    e.preventDefault();
  }

  render() {
    let {
      id,
      startDate,
      expireDate,
      level,
      title,
      description,
      isFinish,
    } = this.props.task;
    return (
      <Link className="list-item" to={`/edit/${id}`}>
          <div>
              <h1 className="list-item__title">{title}</h1>
              <p className="list-item__description">{description}</p>
              <p className="list-item__sub-description">{levelMap[level]}</p>
              <p className="list-item__sub-description">开始时间：{moment(startDate).format('YYYY-MM-DD')}</p>
          </div>
          <div>
            <h3 className="list-item__data">
              {
                stateMap[isFinish]
              }
            </h3>
            <h3 className="list-item__data">
              {
                moment().isBefore(expireDate) ? (
                `距离Deadline还有${Math.abs(moment().diff(moment(expireDate), 'days'))}天`
                ) : (
                  `超过Deadline${moment().diff(moment(expireDate), 'days')}天`
                )
              }
            </h3>
            <div className="list-item__action-container">
              {
                isFinish.toString() === "0" ?
                <Button type="primary" onClick={this.onClickFinish}>
                  标记为已完成
                </Button> :
                <Button type="primary" onClick={this.onClickUnFinish}>
                  标记为未完成
                </Button>
              }
            </div>
            
          </div>
      </Link>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  editTask: (task) => dispatch(startEditTask(task)),
});

export default connect(undefined, mapDispatchToProps)(TodoTaskListItem);
