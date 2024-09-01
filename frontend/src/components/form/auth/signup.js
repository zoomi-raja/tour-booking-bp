import React from 'react';
import classes from './style.module.scss';
import Button from '../../UI/Button/Button';
import { Redirect, Link } from 'react-router-dom';
import Aux from '../../../hoc/Aux';
// redux
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/auth/actions';
const attemptRegistration = (fields, func) => {
  return (event) => {
    event.preventDefault();
    for (let field in fields) {
      if (!fields[field].isValid) return;
    }
    func(
      fields.name.value,
      fields.email.value,
      fields.password.value,
      fields.passwordConfirm.value
    );
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
    <>
      <div className={errorClass.join(' ')}>{prop.message}</div>
      <form
        className={classes.form}
        style={{ margin: '8vh auto' }}
        onSubmit={attemptRegistration(prop.fields, prop.onRegistration)}
      >
        {redirect}
        <h1>Sign Up form</h1>
        <div className={classes.form__group}>
          <input
            placeholder="Full Name"
            autoComplete="off"
            data-error={
              !prop.fields.name.isValid && prop.fields.name.touched
                ? 'true'
                : ''
            }
            className={classes.form__input}
            type="text"
            required
            name="name"
            id="name"
            onChange={prop.onFieldChange}
          />
          <label className={classes.form__label} htmlFor="name">
            Full Name
          </label>
        </div>
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
        <div className={classes.form__group}>
          <input
            placeholder="Confirm Password"
            autoComplete="off"
            data-error={
              !prop.fields.passwordConfirm.isValid &&
              prop.fields.passwordConfirm.touched
                ? 'true'
                : ''
            }
            className={classes.form__input}
            type="password"
            required
            name="passwordConfirm"
            id="passwordConfirm"
            onChange={prop.onFieldChange}
          />
          <label
            className={classes.form__label}
            htmlFor="papasswordConfirmssword"
          >
            Confirm Password
          </label>
        </div>
        <Button
          btnType="btn--primary"
          btnSize="btn--large"
          type="submit"
          disabled={prop.loading ? 'disabled' : ''}
        >
          Register
        </Button>
        <span className={classes.bottom}>
          Already have Account ? <Link to="/auth/login">Login</Link>
        </span>
      </form>
    </>
  );
};
const mapStateToProps = (state) => {
  const props = {
    ...state.auth,
    isAuthenticated: !!state.auth.token,
  };
  return props;
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRegistration: (name, email, password, passwordConfirm) => {
      dispatch(actions.register(name, email, password, passwordConfirm));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
