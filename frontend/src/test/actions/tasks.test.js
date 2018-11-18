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
  let headers = {"Content-Type": "application/json"};
  for(let i = 0; i < tasks.length; i++) {
    fetch("/api/tasks/", {
      headers,
      method: 'POST',
      body: JSON.stringify(tasks[i]),
    }).then(res => res.json())
      .then(json => {
        idCollector.push(json.id);
        if(idCollector.length == tasks.length) {
          done();
        }
      });
  }
});

afterEach((done) => {
  if (idCollector.length == 0) {
    done();
  }
  let idCounter = [];
  let headers = {"Content-Type": "application/json"};
  for(let i = 0; i < idCollector.length; i++) {
    fetch(`/api/tasks/${idCollector[i]}/`, {
      headers,
      method: 'DELETE',
    }).then(() => {
      idCounter.push(idCollector[i]);
      if (idCounter.length == idCollector.length) {
        idCollector = [];
        done();
      }
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
    level: '0',
    title: '测试样例1',
    description: '测试样例1',
    isFinish: '0',
  };

  store.dispatch(startAddTask(taskData)).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: 'ADD_TASK',
      task: {
        id: action[0].task.id,
        ...taskData,
      }
    });
    
    idCollector.push(action[0].task.id);
    let headers = {"Content-Type": "application/json"};
    return fetch(`/api/tasks/${action[0].task.id}/`, {
      headers,
      method: 'GET',
    }).then(res => res.json())
      .then(json => {
        expect(json).toEqual({
          id: action[0].task.id,
          ...taskData
        });
        done();
      });
  });
});

test('should return remove task action object as expect', () => {
  const id = "0";
  const action = removeTask({ id });
  expect(action).toEqual({
    type: 'REMOVE_TASK',
    id: id,
  });
});

test('should run startRemoveTask as expect', (done) => {
  const store = createMockStore();
  const id = idCollector.pop();

  store.dispatch(startRemoveTask({ id })).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: 'REMOVE_TASK',
      id: id,
    });

    let headers = {"Content-Type": "application/json"};
    return fetch(`/api/tasks/${id}/`, {
      headers,
      method: 'POST',
    }).then(res => {
      expect(res.status).not.toBe(200);
      done();
    });
  });
});

test('should return editTask action object as expect', () => {
  const action = editTask({
    ...tasks[0],
    id: 0,
  });
  expect(action).toEqual({
    type: 'EDIT_TASK',
    task: {
      ...tasks[0],
      id: 0,
    }
  });
});

test('should run startEditTask as expect', (done) => {
  const store = createMockStore();
  const taskData = {
    ...tasks[1],
    id: idCollector[0],
  };

  store.dispatch(startEditTask(taskData)).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: 'EDIT_TASK',
      task: taskData,
    });

    let headers = {"Content-Type": "application/json"};
    return fetch(`/api/tasks/${taskData.id}/`, {
      headers,
      method: 'GET',
    }).then(res => res.json())
      .then(json => {
        expect(json).toEqual(taskData);
        done();
      });
  });
});

test('should return setTask action object as expect', () => {
  const mockTasks = [{
    ...tasks[0],
    id: "0",
  }, {
    ...tasks[1],
    id: "1",
  }, {
    ...tasks[2],
    id: "2",
  }];
  const action = setTasks(mockTasks);
  expect(action).toEqual({
    type: 'SET_TASKS',
    tasks: mockTasks,
  });
});

test('should run startEditTask as expect', (done) => {
  const store = createMockStore();
  store.dispatch(startSetTasks()).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: 'SET_TASKS',
      tasks: expect.any(Array),
    });
    done();
  });
});