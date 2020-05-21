import React, { useEffect, useState } from 'react';
import Spinner from '../UI/Spinner/Spinner';
import axios from '../../utils/Axios';
const Payment = (props) => {
  useEffect(() => {
    (async () => {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${localStorage.getItem('token')}`;
      const booking = await axios.post(
        `/bookings/success/${props.match.params.sessionID}`
      );
      toggleLoading(false);
      console.log(booking);
      setTimeout(() => {
        props.history.push('/');
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
