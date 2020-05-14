import React, { useState } from 'react';
import classes from './style.module.scss';
import Button from '../../UI/Button/Button';
import axios from '../../../utils/Axios';
import Aux from '../../../hoc/Aux';

const attemptLogin = (fields, setState) => {
  return async (e) => {
    e.preventDefault();
    for (let field in fields) {
      if (!fields[field].isValid && fields[field].forLogin) return;
    }
    setState({ disable: true, errorMessage: null });
    try {
      const response = await axios.post('/users/login', {
        email: fields.email.value,
        password: fields.password.value,
      });
      setState({ disable: false, errorMessage: null });
    } catch (err) {
      setState({ disable: false, errorMessage: err.response.data.message });
      setTimeout(() => {
        setState({ errorMessage: null });
      }, 2000);
    }
  };
};
const Form = (prop) => {
  const [state, setState] = useState({ disable: false, errorMessage: '' });
  let errorClass = [classes.error];
  if (state.errorMessage) {
    errorClass.push(classes.error_show);
  }
  return (
    <Aux>
      <div className={errorClass.join(' ')}>{state.errorMessage}</div>
      <form
        className={classes.form}
        onSubmit={attemptLogin(prop.fields, setState)}
      >
        <h1>Sign in form</h1>
        <div className={classes.form__group}>
          <input
            placeholder="Email Address"
            autoComplete="off"
            data-error={
              !prop.fields.email.isValid && prop.fields.email.touched
                ? 'true'
                : ''
            }
            className={classes.form__input}
            type="email"
            required
            name="email"
            id="email"
            onChange={prop.onFieldChange}
          />
          <label className={classes.form__label} htmlFor="email">
            Email Address
          </label>
        </div>
        <div className={classes.form__group}>
          <input
            placeholder="Password"
            autoComplete="off"
            data-error={
              !prop.fields.password.isValid && prop.fields.password.touched
                ? 'true'
                : ''
            }
            className={classes.form__input}
            type="password"
            required
            name="password"
            id="password"
            onChange={prop.onFieldChange}
          />
          <label className={classes.form__label} htmlFor="password">
            Password
          </label>
        </div>
        <div className={classes.form__groupv}>
          <Button
            btnType="btn--primary"
            type="submit"
            disabled={state.disable ? 'disabled' : ''}
          >
            Sign In
          </Button>
          <div className={classes.form__radioInput}>
            <input name="keeplog" id="keeplog" type="checkbox" />
            <label
              htmlFor="keeplog"
              className={classes['form__radioInput--label']}
            >
              Keep logged in..!
            </label>
          </div>
        </div>
      </form>
    </Aux>
  );
};
export default Form;
