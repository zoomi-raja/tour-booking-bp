import React from 'react';
import classes from './style.module.scss';
import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Aux';
import { Redirect } from 'react-router-dom';
// redux
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/auth/actions';

const attemptLogin = (fields, storeAction) => {
  return async (e) => {
    e.preventDefault();
    for (let field in fields) {
      if (!fields[field].isValid && fields[field].forLogin) return;
    }
    storeAction(fields.email.value, fields.password.value);
  };
};
const Form = (prop) => {
  let errorClass = [classes.error];
  if (prop.error) {
    errorClass.push(classes.error_show);
  }
  let redirect = null;
  if (prop.isAuthenticated) {
    redirect = <Redirect to={prop.authRedirectPath} />;
  }
  return (
    <Aux>
      {redirect}
      <div className={errorClass.join(' ')}>{prop.message}</div>
      <form
        className={classes.form}
        onSubmit={attemptLogin(prop.fields, prop.onAuth)}
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
            disabled={prop.loading ? 'disabled' : ''}
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
const mapStateToProps = (state) => {
  const props = {
    ...state.auth,
    isAuthenticated: state.auth.token !== null,
  };
  return props;
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => {
      dispatch(actions.auth(email, password));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
