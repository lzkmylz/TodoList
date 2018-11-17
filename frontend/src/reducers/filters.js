// FILTERS REDUCER

const filterReducerDefaultState = {
  titleText: '',
  isFinishFilter: 0,
  sortBy: 'startDate',
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SORT_BY_LEVEL':
      return {
        ...state,
        sortBy: 'level',
      };
    case 'SET_TITLETEXT_FILTER':
      return {
        ...state,
        titleText: action.titleText,
      };
    case 'SORT_BY_EXPIREDATE':
      return {
        ...state,
        sortBy: 'expireDate',
      }
    case 'SORT_BY_STARTDATE':
      return {
        ...state,
        sortBy: 'startDate',
      }
    case 'SET_ISFINISH_FILTER':
      return {
        ...state,
        isFinishFilter: action.isFinishFilter,
      }
    default:
      return state;
  }
};

export default filterReducer;
