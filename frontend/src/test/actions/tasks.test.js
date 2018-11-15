import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
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

beforeEach((done) => {
  tasks.forEach((task) => {
    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify(task);
    fetch("/api/tasks/", {
      headers,
      method: "POST",
      body,
    }).then(() => done());
  });
});

test('should set tasks from fixtures as expect', (done) => {
  const store = createMockStore();
  store.dispatch(startSetTasks().then(() => {
    expect(store.getState()['tasks']).toEqual(tasks);
    done();
  }));
})