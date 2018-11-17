// TASKS REDUCER

const taskReducerDefaultState = [];

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
        if (task.id.toString() === action.task.id.toString()) {
          return action.task;
        }
        return task
      });
    case 'SET_TASKS':
      return action.tasks;
    default:
      return state;
  }
};

export default taskReducer;
