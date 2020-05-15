import * as actionTypes from '../actions/auth/actionTypes';

const initialState = {
  token: null,
  userID: null,
  loading: false,
  error: null,
  message: null,
  authRedirectPath: '/',
};
const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
        error: null,
        message: null,
      };
    case actionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.message,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        message: null,
      };
    default:
      return state;
  }
};
export default auth;
