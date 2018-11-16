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
import tasks from '../fixtures/tasks';
const createMockStore = configureMockStore([thunk]);
const mockUid = 'mockUid';

/*
beforeEach((done) => {
  tasks.forEach((task) => {
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify(task);
    fetch("/api/tasks/", {
      headers,
      method: "POST",
      body,
    }).then(() => done());
  });
});
*/

test('should set tasks from fixtures as expect', (done) => {
  let task = {
    id: '1234',
    startDate: moment().subtract(3, 'days').format("x"),
    expireDate: moment().add(8, 'days').format("x"),
    level: 0,
    title: '迟早要完',
    description: '牙疼',
  }
  let headers = { "Content-Type": "application/json" };
  let body = JSON.stringify({ task });
  fetch("/api/tasks/", {
    headers,
    method: "POST",
    body,
  }).then(() => {
    let headers = { "Content-Type": "application/json" };
    fetch("/api/tasks/", {
      headers,
      method: "GET",
    }).then(response => {
      response.json().then((responseJson) => {
        expect(responseJson).toEqual(task);
      }).then(() => done());
    });
  });
  /*
  tasks.forEach((task) => {
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify(task);
    fetch("/api/tasks/", {
      headers,
      method: "POST",
      body,
    }).then(() => done());
  });
  

  let headers = { "Content-Type": "application/json" };
  fetch("/api/tasks/", {
    headers,
    method: "GET",
  }).then(response => {
    response.json().then((responseJson) => {
      expect(responseJson).toEqual(tasks);
    }).then(() => done());
  });
  */
});
