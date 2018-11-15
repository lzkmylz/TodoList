import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
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

export const TodoTaskListItem = ({
  id,
  startDate,
  ExpireDate,
  level,
  title,
  description,
  }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{title}</h3>
            <p className="list-item__content">{description}</p>
            <p className="list-item__sub-title">{levelMap[level]}</p>
            <p className="list-item__sub-title">开始时间：{moment(startDate).format('YYYY-MM-DD')}</p>
        </div>
        <h3 className="list-item__data">
          {
            moment().isBefore(ExpireDate) ? (
            `距离Deadline还有${Math.abs(moment().diff(moment(ExpireDate), 'days'))}天`
            ) : (
              `超过Deadline${moment().diff(moment(ExpireDate), 'days')}天`
            )
          }
        </h3>
    </Link>
);

export default TodoTaskListItem;