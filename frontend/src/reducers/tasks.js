// TASKS REDUCER
import moment from 'moment';

const taskReducerDefaultState = [{
  id: '1234',
  startDate: moment().subtract(3, 'days').format(),
  expireDate: moment().add(8, 'days').format(),
  level: 0,
  title: '迟早要完',
  description: '牙疼',
},{
  id: '2333',
  startDate: moment().subtract(5, 'days').format(),
  expireDate: moment().add(10, 'days').format(),
  level: 1,
  title: '毕业',
  description: '新西兰走好',
},{
  id: '666',
  startDate: moment().subtract(10, 'days').format(),
  expireDate: moment().add(5, 'days').format(),
  level: 2,
  title: '跑路',
  description: '上了名单了',
}];

const taskReducer = (state = taskReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.task
      ];
    case 'REMOVE_TASK':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_TASK':
      return state.map((task) => {
        if (task.id === action.id) {
          return [
            ...task,
            action.updates
          ];
        }
        return true;
      });
    case 'SET_TASKS':
      return action.tasks;
    default:
      return state;
  }
};

export default taskReducer;
