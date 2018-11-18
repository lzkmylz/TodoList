import {
  sortByLevel,
  sortByTitletext,
  sortByExpireDate,
  sortByStartDate,
  sortByIsFinish
} from '../../actions/filters';

test('should return sortBylevel action object as expect', () => {
  const action = sortByLevel();
  expect(action).toEqual({
    type: 'SORT_BY_LEVEL',
  });
});

test('should return sortByTitletext action object as expect', () => {
  const titleText = "titleText test case";
  const action = sortByTitletext(titleText);
  expect(action).toEqual({
    type: 'SET_TITLETEXT_FILTER',
    titleText,
  });
});

test('should return sortByExpireDate action object as expect', () => {
  const action = sortByExpireDate();
  expect(action).toEqual({
    type: 'SORT_BY_EXPIREDATE',
  });
});

test('should return sortByStartDate action object as expect', () => {
  const action = sortByStartDate();
  expect(action).toEqual({
    type: 'SORT_BY_STARTDATE'
  });
});

test('should return sortByIsFinish action object as expect', () => {
  const isFinishFilter = "1";
  const action = sortByIsFinish(isFinishFilter);
  expect(action).toEqual({
    type: 'SET_ISFINISH_FILTER',
    isFinishFilter,
  });
});
