import * as actionTypes from './actionTypes';
import axios from '../../../utils/Axios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authFail = (msg) => {
  return {
    type: actionTypes.AUTH_FAIL,
    message: msg,
  };
};

export const clearError = () => {
  return {
    type: actionTypes.CLEAR_ERROR,
  };
};
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
export const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: authData.token,
    user: authData.data.user,
  };
};
export const auth = (email, password) => {
  return async (dispatch) => {
    dispatch(authStart());
    try {
      const response = await axios.post('/users/login', {
        email: email,
        password: password,
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
      dispatch(authSuccess(response.data));
      //   todo timeout functionality
      //   const exp = new Date(
      // 	new Date().getTime() + response..data.data.expiresIn * 1000
      //   );
      //   localStorage.setItem("expirationDate", exp);
      //   dispatch(checkAuthTimeout(response.data.expiresIn));
    } catch (err) {
      let msg = err.message;
      if (err && err.response && err.response.data) {
        msg = err.response.data.message;
      }
      dispatch(authFail(msg));
      setTimeout(() => {
        dispatch(clearError());
      }, 2000);
    }
  };
};
export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
      return;
    } else {
      const user = { user: JSON.parse(localStorage.getItem('user')) };
      dispatch(authSuccess({ token: token, data: user }));
      // dispatch(
      //   checkAuthTimeout((exp.getTime() - new Date().getTime()) / 1000)
      // );
    }
  };
};
