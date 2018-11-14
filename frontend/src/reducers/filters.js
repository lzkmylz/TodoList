// FILTERS REDUCER

const filterReducerDefaultState = {
  text: '',
  sortBy: 'expireDate',
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SORT_BY_LEVEL':
      return {
        ...state,
        sortBy: 'level',
      };
    case 'SORT_BY_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_EXPIREDATE':
      return {
        ...state,
        sortBy: 'expireDate',
      }
    default:
      return state;
  }
};

export default filterReducer;
