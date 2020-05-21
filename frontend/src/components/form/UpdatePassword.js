import React from 'react';
import classes from './auth/style.module.scss';
import Button from '../UI/Button/Button';

const UserDetail = (props) => {
  return (
    <form
      className={classes.form}
      onSubmit={() => {}}
      style={{ margin: '2% auto', paddingBottom: '3.2rem', boxShadow: 'none' }}
    >
      <div className={classes.form__group}>
        <input
          placeholder="Current Password"
          autoComplete="off"
          data-error=""
          className={classes.form__input}
          type="password"
          required
          name="currentPassword"
          id="currentPassword"
          onChange={props.onFieldChange}
        />
        <label className={classes.form__label} htmlFor="currentPassword">
          Current Password
        </label>
      </div>
      <div className={classes.form__group}>
        <input
          placeholder="Password"
          autoComplete="off"
          data-error=""
          className={classes.form__input}
          type="password"
          required
          name="password"
          id="password"
          onChange={props.onFieldChange}
        />
        <label className={classes.form__label} htmlFor="password">
          Password
        </label>
      </div>
      <div className={classes.form__group}>
        <input
          placeholder="Confirm Password"
          autoComplete="off"
          data-error=""
          className={classes.form__input}
          type="password"
          required
          name="passwordConfirm"
          id="passwordConfirm"
          onChange={props.onFieldChange}
        />
        <label className={classes.form__label} htmlFor="passwordConfirm">
          Confirm Password
        </label>
      </div>
      <div className={classes.slideRight}>
        <Button
          btnType="btn--primary"
          type="submit"
          disabled={props.loading ? 'disabled' : ''}
        >
          {props.loading ? 'Loading...' : 'Update'}
        </Button>
      </div>
    </form>
  );
};
export default UserDetail;
