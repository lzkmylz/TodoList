import moment from 'moment';
/* 
Task data structure:
1 task id
2 task start date
3 task expire date
4 task level (0: normal, 1: important, 2: urgent)
5 task title
6 task description
*/

export default (tasks, filters) => {
  return tasks.filter((task) => {
    return task.title.toLowerCase().includes(filters.titleText.toLowerCase());
  }).sort((a, b) => {
    if (filters.sortBy === "startDate") {
      return moment(a.startDate).isBefore(moment(b.startDate)) ? 1 : -1;
    } else if (filters.sortBy === "expireDate") {
      return moment(a.expireDate).isBefore(moment(b.expireDate)) ? 1 : -1;
    } else if (filters.sortBy === "level") {
      return a.level - b.level;
    }
    return undefined
  });
}