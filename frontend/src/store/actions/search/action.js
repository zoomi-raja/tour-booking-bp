import * as actionTypes from './actionTypes';
import axios from '../../../utils/Axios';
export const changeSearch = (text) => {
  return {
    type: actionTypes.SEARCH_CHANGED,
    text: text,
  };
};
export const doneSearch = (tours) => {
  return {
    type: actionTypes.SEARCH_DONE,
    tours: tours,
  };
};
// /changeSearch
export const updateSearch = (text) => {
  return async (dispatch) => {
    dispatch(changeSearch(text));
    const tours = await axios.get(`/tours?search=${text}&sort=price,duration`);
    dispatch(doneSearch(tours.data.data.tours));
  };
};
