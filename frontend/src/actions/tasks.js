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

export const startAddTask = (taskData = {}) => {
  return dispatch => {
    const {
      startDate = 0,
      expireDate = 0,
      level = 0,
      title = '',
      description = '',
    } = taskData;
    let headers = {"Content-Type": "application/json"};
    return fetch("/api/tasks/", {headers, })
      .then(res => res.json())
      .then(task => {
        return dispatch(addTask(task));
      });
  };
};