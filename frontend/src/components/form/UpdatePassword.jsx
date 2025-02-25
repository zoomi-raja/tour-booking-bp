import React, { useState } from 'react';
import classes from './auth/style.module.scss';
import Button from '../UI/Button/Button';
import checkValidity from '../../utils/InputValidity';
import axios from '../../utils/Axios';

const initState = {
  loading: false,
  fields: {
    currentPassword: {
      value: '',
      validation: {
        required: true,
        minLength: 6,
      },
      isValid: false,
      touched: false,
    },
    password: {
      value: '',
      validation: {
        required: true,
        minLength: 6,
      },
      isValid: false,
      touched: false,
    },
    passwordConfirm: {
      value: '',
      validation: {
        required: true,
      },
      isValid: false,
      touched: false,
    },
  },
};
const attemptUpdate = (state, setState) => {
  return async (e) => {
    e.preventDefault();
    for (let field in state.fields) {
      if (!state.fields[field].isValid) return;
    }
    setState({ ...state, loading: true });
    try {
      const result = await axios.patch('/users/UpdatePassword', {
        currentPassword: state.fields.currentPassword.value,
        password: state.fields.password.value,
        passwordConfirm: state.fields.passwordConfirm.value,
      });
      localStorage.setItem('token', result.data.token);
    } catch (error) {
      console.log(error);
    }
    setState({ ...state, loading: false });
  };
};
const onFieldChange = (event, setState, state) => {
  setState({
    loading: false,
    fields: {
      ...state.fields,
      [event.target.name]: {
        ...state.fields[event.target.name],
        value: event.target.value,
        isValid: checkValidity(
          event.target.value,
          state.fields[event.target.name].validation
        ),
        touched: true,
      },
    },
  });
};
const UpdatePassword = (props) => {
  const [state, setState] = useState(initState);
  return (
    <form
      className={classes.form}
      onSubmit={attemptUpdate(state, setState)}
      style={{ margin: '2% auto', paddingBottom: '3.2rem', boxShadow: 'none' }}
    >
      <div className={classes.form__group}>
        <input
          placeholder="Current Password"
          autoComplete="off"
          data-error={
            !state.fields.currentPassword.isValid &&
            state.fields.currentPassword.touched
              ? 'true'
              : ''
          }
          className={classes.form__input}
          type="password"
          required
          name="currentPassword"
          id="currentPassword"
          onChange={(event) => {
            onFieldChange(event, setState, state);
          }}
        />
        <label className={classes.form__label} htmlFor="currentPassword">
          Current Password
        </label>
      </div>
      <div className={classes.form__group}>
        <input
          placeholder="Password"
          autoComplete="off"
          data-error={
            !state.fields.password.isValid && state.fields.password.touched
              ? 'true'
              : ''
          }
          className={classes.form__input}
          type="password"
          required
          name="password"
          id="password"
          onChange={(event) => {
            onFieldChange(event, setState, state);
          }}
        />
        <label className={classes.form__label} htmlFor="password">
          Password
        </label>
      </div>
      <div className={classes.form__group}>
        <input
          placeholder="Confirm Password"
          autoComplete="off"
          data-error={
            !state.fields.passwordConfirm.isValid &&
            state.fields.passwordConfirm.touched
              ? 'true'
              : ''
          }
          className={classes.form__input}
          type="password"
          required
          name="passwordConfirm"
          id="passwordConfirm"
          onChange={(event) => {
            onFieldChange(event, setState, state);
          }}
        />
        <label className={classes.form__label} htmlFor="passwordConfirm">
          Confirm Password
        </label>
      </div>
      <div className={classes.slideRight}>
        <Button
          btnType="btn--primary"
          type="submit"
          disabled={state.loading ? 'disabled' : ''}
        >
          {state.loading ? 'Loading...' : 'Update'}
        </Button>
      </div>
    </form>
  );
};
export default UpdatePassword;
