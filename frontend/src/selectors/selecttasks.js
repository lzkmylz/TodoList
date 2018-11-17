import moment from 'moment';
/* 
Task data structure:
1 task id
2 task start date
3 task expire date
4 task level (0: normal, 1: important, 2: urgent)
5 task title
6 task description
7 isFinish
*/

export default (tasks, {titleText, finishState, sortBy}) => {
  let filteredTasks = tasks.filter((task) => {
    return task.title.toLowerCase().includes(titleText.toLowerCase());
  });
  if (sortBy === 'isFinish') {
    return filteredTasks.filter((task) => {
      return task.isFinish.toString() === finishState.toString();
    });
  } else {
    return filteredTasks.sort((a, b) => {
      if (sortBy === "startDate") {
        return moment(a.startDate).isBefore(moment(b.startDate)) ? 1 : -1;
      } else if (sortBy === "expireDate") {
        return moment(a.expireDate).isBefore(moment(b.expireDate)) ? -1 : 1;
      } else if (sortBy === "level") {
        return b.level - a.level;
      }
      return undefined
    });
  }
}