import React, { useState } from 'react';
import classes from './auth/style.module.scss';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import checkValidity from '../../utils/InputValidity';
import axios from '../../utils/Axios';
import * as authActions from '../../store/actions/auth/actions';

const initState = {
  loading: false,
  fields: {
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
  },
};
const attemptUpdate = (state, setState, updateStoreName) => {
  return async (e) => {
    e.preventDefault();
    for (let field in state.fields) {
      if (!state.fields[field].isValid) return;
    }
    setState({ ...state, loading: true });
    try {
      await axios.patch('/users/udpateMe', { name: state.fields.name.value });
      updateStoreName(state.fields.name.value);
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
const UserDetail = (props) => {
  initState.fields.name.value = props.user.name;
  const [state, setState] = useState(initState);
  return (
    <form
      className={classes.form}
      onSubmit={attemptUpdate(state, setState, props.updateName)}
      style={{ margin: '2% auto', paddingBottom: '3.2rem', boxShadow: 'none' }}
    >
      <div className={classes.form__group}>
        <input
          placeholder="Email Address"
          autoComplete="off"
          className={classes.form__input}
          type="email"
          disabled
          name="email"
          id="email"
          value={props.user.email}
        />
        <label className={classes.form__label} htmlFor="email">
          Email Address
        </label>
      </div>
      <div className={classes.form__group}>
        <input
          placeholder="User Name"
          autoComplete="off"
          data-error={
            !state.fields.name.isValid && state.fields.name.touched
              ? 'true'
              : ''
          }
          className={classes.form__input}
          type="text"
          required
          name="name"
          id="name"
          value={state.fields.name.value}
          onChange={(event) => {
            onFieldChange(event, setState, state);
          }}
        />
        <label className={classes.form__label} htmlFor="name">
          User Name
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
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (name) => {
      dispatch(authActions.updateUser({ name: name }));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
