// FILTERS REDUCER

const filterReducerDefaultState = {
  titleText: '',
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
    default:
      return state;
  }
};

export default filterReducer;
