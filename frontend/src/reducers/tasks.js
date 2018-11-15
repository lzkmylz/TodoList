// TASKS REDUCER
import moment from 'moment';

const taskReducerDefaultState = [{
  id: '1234',
  startDate: moment().subtract(3, 'days'),
  ExpireDate: moment().add(6, 'days'),
  level: 0,
  title: '迟早要完',
  description: '牙疼',
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
