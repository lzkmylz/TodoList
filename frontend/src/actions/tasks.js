import moment from 'moment';
/* 
TASK ACTIONS
Task data structure:
1 task id
2 task start date
3 task expire date
4 task level (0: normal, 1: important, 2: urgent)
5 task title
6 task description
7 isFinish (0 not finish, 1 finish)
*/

// ADD TASK
export const addTask = task => ({
  type: 'ADD_TASK',
  task,
});

export const startAddTask = (taskData = {
  startDate: moment().format(),
  expireDate: moment().format(),
  level: 0,
  title: '',
  description: '',
  isFinish: 0,
}) => {
  return (dispatch, getState) => {
    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify(taskData);
    return fetch("/api/tasks/", {
      headers,
      method: 'POST',
      body: body,
    }).then(response => {
      response.json().then((responseJson => {
        dispatch(addTask(responseJson));
      }));
    });
  };
};

// REMOVE_TASK
export const removeTask = ({ id }) => ({
  type: 'REMOVE_TASK',
  id,
});

export const startRemoveTask = ({ id }) => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};

    return fetch(`/api/tasks/${id}/`, {
      headers,
      method: 'DELETE',
    }).then(response => {
        if (response.ok) {
          return dispatch(removeTask({ id }));
        }
      });
  };
};

// EDIT_TASK
export const editTask = (task) => ({
  type: 'EDIT_TASK',
  task,
});

export const startEditTask = (task) => {
  return (dispatch, getState) => {
    let headers = {"Content-Type": "application/json"};
    let data = JSON.stringify({
      startDate: task.startDate,
      expireDate: task.expireDate,
      level: task.level,
      title: task.title,
      description: task.description,
      isFinish: task.isFinish,
    });

    return fetch(`/api/tasks/${task.id}/`, {
      headers,
      method: 'PUT',
      body: data,
    }).then(response => {
      response.json().then((responseJson) => {
        return dispatch(editTask(responseJson));
      });
    });
  };
};

//SET_TASKS
export const setTasks = (tasks) => ({
  type: 'SET_TASKS',
  tasks,
});

export const startSetTasks = () => {
  return (dispatch, getState) => {
    let headers = {"Content-Type": "application/json"};

    return fetch("/api/tasks/", {
      headers,
      method: "GET",
    }).then(response => {
      response.json().then((responseJson) => {
        dispatch(setTasks(responseJson));
      });
    });
  };
};