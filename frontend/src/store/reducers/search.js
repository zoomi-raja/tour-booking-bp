import * as actionTypes from '../actions/search/actionTypes';

const initialState = {
  text: '',
  tours: [],
  loading: false,
};
const search = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_CHANGED:
      return {
        ...state,
        text: action.text,
        loading: true,
      };
    case actionTypes.SEARCH_DONE:
      return {
        ...state,
        tours: action.tours,
        loading: false,
      };
    default:
      return state;
  }
};
export default search;
