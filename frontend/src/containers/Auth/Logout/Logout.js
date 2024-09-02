import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/auth/actions';

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the logout action when the component mounts
    dispatch(actions.logout());
  }, [dispatch]);

  return <Navigate to="/" />;
};

export default Logout;
