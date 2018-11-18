import React from 'react';
import { shallow } from 'enzyme';
import { AddTaskPage } from '../../components/AddTaskPage';
import tasks from '../tixtures/tasks';

let startAddTask, history, wrapper;
beforeEach(() => {
  startAddTask = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddTaskPage startAddTask={startAddTask} history={history} />);
})

test('should render AddTaskPage as expect', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
  wrapper.find('Form(TaskForm)').prop('onSubmit')(tasks[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddTask).toHaveBeenLastCalledWith(tasks[0]);
});
