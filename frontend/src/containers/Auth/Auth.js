import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Auth.module.scss';
import Login from '../../components/form/auth/Login';
import Signup from '../../components/form/auth/signup';
import checkValidity from '../../utils/InputValidity';

const Auth = () => {
  const location = useLocation();
  
  const [isLogin, setIsLogin] = useState(true);
  const [fields, setFields] = useState({
    email: {
      forLogin: true,
      value: '',
      validation: {
        required: true,
        isEmail: true,
      },
      isValid: false,
      touched: false,
    },
    password: {
      forLogin: true,
      value: '',
      validation: {
        required: true,
        minLength: 6,
      },
      isValid: false,
      touched: false,
    },
    passwordConfirm: {
      forLogin: false,
      value: '',
      validation: {
        required: true,
      },
      isValid: false,
      touched: false,
    },
    name: {
      forLogin: false,
      value: '',
      validation: {
        required: true,
        minLength: 4,
      },
      isValid: false,
      touched: false,
    },
  });

  useEffect(() => {
    document.getElementById('root').setAttribute('style', 'height:100vh;background-color:var(--background-color)');
    
    if (/signup/.test(location.pathname)) {
      setIsLogin(false);
    } else if (/login/.test(location.pathname)) {
      setIsLogin(true);
    }

    return () => {
      document.getElementById('root').setAttribute('style', '');
    };
  }, [location.pathname]);

  const onFieldChange = (event) => {
    const { name, value } = event.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: {
        ...prevFields[name],
        value: value,
        isValid: checkValidity(value, prevFields[name].validation),
        touched: true,
      },
    }));
  };

  return (
    <div className={classes.remainingHeight}>
      <div className={['container', classes.container].join(' ')}>
        {isLogin ? (
          <Login onFieldChange={onFieldChange} fields={fields} />
        ) : (
          <Signup onFieldChange={onFieldChange} fields={fields} />
        )}
      </div>
    </div>
  );
};

export default Auth;
