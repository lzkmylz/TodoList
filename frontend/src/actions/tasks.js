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
*/

// ADD TASK
export const addTask = task => ({
  type: 'ADD_TASK',
  task,
});

export const startAddTask = (taskData = {
  startDate: moment(),
  expireDate: moment(),
  level: 0,
  title: '',
  description: '',
}) => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify(taskData);

    return fetch("/api/tasks/", {
      headers,
      method: "POST",
      body,
    }).then(res => res.json())
      .then(task => {
        return dispatch(addTask(task));
      });
  };
};

// REMOVE_TASK
export const removeTask = ({ id }) => ({
  type: "REMOVE_TASK",
  id,
});

export const startRemoveTask = ({ id }) => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};

    return fetch(`/api/tasks/${id}/`, {
      headers,
      method: "DELETE",
    }).then(res => {
        if (res.ok) {
          return dispatch(removeTask({ id }));
        }
      })
  }
}

// EDIT_TASK
export const editTask = (id, updates) => ({
  type: "EDIT_TASK",
  id,
  updates,
});

export const startEditTask = (id, updates) => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify(updates);

    return fetch(`/api/tasks/${id}/`, {
      headers,
      method: "PUT",
      body,
    }).then(res => res.json())
      .then((id, updates) => {
        return dispatch(editTask(id, updates));
      })
  };
};

//SET_TASKS
export const setTasks = (tasks) => ({
  type: "SET_TASKS",
  tasks,
});

export const startSetTasks = () => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};

    return fetch("/api/tasks/", {
      headers,
      method: "GET",
    }).then(res => {
      return dispatch(setTasks(res.json()));
    });
  }
};