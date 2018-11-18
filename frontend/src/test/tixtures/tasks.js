import moment from 'moment';

// Task test cases with id property.
const tasks = [{
  startDate: moment().subtract(7, 'days').format(),
  expireDate: moment().add(7, 'days').format(),
  level: '0',
  title: '测试样例1',
  description: '测试样例1',
  isFinish: '0',
},{
  startDate: moment().subtract(5, 'days').format(),
  expireDate: moment().add(9, 'days').format(),
  level: '1',
  title: '测试样例2',
  description: '测试样例2',
  isFinish: '0',
},{
  startDate: moment().subtract(9, 'days').format(),
  expireDate: moment().add(3, 'days').format(),
  level: '2',
  title: '测试样例3',
  description: '测试样例3',
  isFinish: '0',
}];

export default tasks;
