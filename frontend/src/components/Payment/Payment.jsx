import React, { useEffect, useState } from 'react';
import Spinner from '../UI/Spinner/Spinner';
import axios from '../../utils/Axios';
import { useNavigate } from 'react-router-dom';
const Payment = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${localStorage.getItem('token')}`;
      await axios.post(`/bookings/success/${props.match.params.sessionID}`);
      toggleLoading(false);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    })();
  }, [props.match.params.sessionID, props.history]);
  const [loading, toggleLoading] = useState(true);
  let html = <Spinner />;
  if (!loading) {
    html = (
      <h1
        style={{
          textAlign: 'center',
          color: 'var(--main-color)',
          letterSpacing: '.3rem',
        }}
      >
        Payment Successfull
      </h1>
    );
  }
  return html;
};
export default Payment;
