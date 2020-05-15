import actionTypes from '../actions/auth/actionTypes';

const initialState = {
  token: null,
  userID: null,
  loading: false,
  error: null,
  authRedirectPath: '/',
};
const auth = (state = initialState) => {
  return state;
};
export default auth;
