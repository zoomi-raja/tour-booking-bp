import React from 'react';
import classes from './style.module.scss';
import Button from '../../UI/Button/Button';
const Form = (prop) => {
  return (
    <form className={classes.form} style={{ margin: '8vh auto' }}>
      <h1>Sign Up form</h1>
      <div className={classes.form__group}>
        <input
          placeholder="Full Name"
          autoComplete="off"
          className={classes.form__input}
          type="text"
          required
          nme="name"
          id="name"
        />
        <label className={classes.form__label} htmlFor="name">
          Full Name
        </label>
      </div>
      <div className={classes.form__group}>
        <input
          placeholder="Email Address"
          autoComplete="off"
          className={classes.form__input}
          type="email"
          required
          nme="email"
          id="email"
        />
        <label className={classes.form__label} htmlFor="email">
          Email Address
        </label>
      </div>
      <div className={classes.form__group}>
        <input
          placeholder="Password"
          autoComplete="off"
          className={classes.form__input}
          type="password"
          required
          name="password"
          id="password"
        />
        <label className={classes.form__label} htmlFor="password">
          Password
        </label>
      </div>
      <div className={classes.form__group}>
        <input
          placeholder="Confirm Password"
          autoComplete="off"
          className={classes.form__input}
          type="password"
          required
          name="passwordConfirm"
          id="passwordConfirm"
        />
        <label
          className={classes.form__label}
          htmlFor="papasswordConfirmssword"
        >
          Confirm Password
        </label>
      </div>
      <Button btnType="btn--primary" btnSize="btn--large">
        Register
      </Button>
    </form>
  );
};
export default Form;
