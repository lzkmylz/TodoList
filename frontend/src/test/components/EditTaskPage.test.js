import React from 'react';
import { shallow } from 'enzyme';
import { EditTaskPage } from '../../components/EditTaskPage';
import tasks from '../tixtures/tasks';

let startEditTask, startRemoveTask, history, wrapper;
beforeEach(() => {
  startEditTask = jest.fn();
  startRemoveTask = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditTaskPage
    startEditTask={startEditTask}
    history={history}
    startRemoveTask={startRemoveTask}
    task={{
      ...tasks[0],
      id: '0',
    }}
  />);
})

test('should render AddTaskPage as expect', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
  wrapper.find('Form(TaskForm)').prop('onSubmit')({
    ...tasks[0],
    id: '0',
    title: 'changed',
  });
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditTask).toHaveBeenLastCalledWith({
    ...tasks[0],
    id: '0',
    title: 'changed',
  });
});

test('should handle on click', () => {
  wrapper.find('Button').prop('onClick')();
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveTask).toHaveBeenLastCalledWith({ id: '0' });
});
