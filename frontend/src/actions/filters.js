// SORT_BY_LEVEL
export const sortByLevel = () => ({
  type: 'SORT_BY_LEVEL',
});

// SET_TITLETEXT_FILTER
export const sortByTitletext = (titleText='') => ({
  type: 'SET_TITLETEXT_FILTER',
  titleText,
});

// SORT_BY_EXPIREDATE
export const sortByExpireDate = () => ({
  type: 'SORT_BY_EXPIREDATE',
})

// SORT_BY_STARTDATE
export const sortByStartDate = () => ({
  type: 'SORT_BY_STARTDATE',
});

// SET_ISFINISH_FILTER
export const sortByIsFinish = (isFinishFilter) => ({
  type: 'SET_ISFINISH_FILTER',
  isFinishFilter,
})