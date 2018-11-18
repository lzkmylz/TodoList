import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moment from 'moment';
import {
  addTask,
  startAddTask,
  removeTask,
  startRemoveTask,
  editTask,
  startEditTask,
  setTasks,
  startSetTasks,
} from '../../actions/tasks';
import tasks from '../tixtures/tasks';

const createMockStore = configureMockStore([thunk]);
let idCollector = [];
beforeEach((done) => {
  tasks.map((task) => {
    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify(task);
    fetch("/api/tasks/", {
      headers,
      method: 'POST',
      body: body,
    }).then((response) => {
      response.json().then((responseJson) => {
        idCollector.push(responseJson.id);
        if (idCollector.length === tasks.length) {
          done();
        }
      });
    });
  });
});

afterEach((done) => {
  let totalIds = idCollector.length;
  let resCollector = [];
  for(let i = 0; i < totalIds; i++) {
    let headers = {"Content-Type": "application/json"};
    fetch(`/api/tasks/${idCollector[i]}/`, {
      headers,
      method: 'DELETE',
    }).then((response) => {
      response.json().then(() => {
        resCollector.push(idCollector[i]);
        if (resCollector.length == totalIds) {
          idCollector = [];
          done();
        }
      });
    });
  }
});

test('should return addTask action object as expect', () => {
  const task = {
    ...tasks[0],
    id: 123,
  }
  const action = addTask(task);
  expect(action).toEqual({
    type: 'ADD_TASK',
    task,
  });
});

test('should run startAddTask as expect', (done) => {
  const store = createMockStore();
  const taskData = {
    startDate: moment().subtract(7, 'days').format(),
    expireDate: moment().add(7, 'days').format(),
    level: 0,
    title: '测试样例1',
    description: '测试样例1',
    isFinish: 0,
  };

  store.dispatch(startAddTask(taskData)).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: 'ADD_TASK',
      task: {
        ...taskData,
        id: expect.any(String),
      },
    });

    let headers = {"Content-Type": "application/json"};
    return fetch(`/api/tasks/${action[0].task.id}/`, {
      headers,
      method: 'GET',
    }).then((response) => {
      response.json().then((responseJson) => {
        expect(responseJson).toEqual(action[0].task);
        done();
      });
    });
  });
});