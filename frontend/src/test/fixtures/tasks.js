import moment from 'moment';

const tasks = [{
  id: '1234',
  startDate: moment().subtract(3, 'days'),
  expireDate: moment().add(8, 'days'),
  level: 0,
  title: '迟早要完',
  description: '牙疼',
},{
  id: '2333',
  startDate: moment().subtract(5, 'days'),
  expireDate: moment().add(10, 'days'),
  level: 1,
  title: '毕业',
  description: '新西兰走好',
},{
  id: '666',
  startDate: moment().subtract(10, 'days'),
  expireDate: moment().add(5, 'days'),
  level: 2,
  title: '跑路',
  description: '上了名单了',
}];

export default tasks;
