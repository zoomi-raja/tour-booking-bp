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
          placeholder="Email Address"
          autoComplete="off"
          data-error=""
          className={classes.form__input}
          type="email"
          required
          name="email"
          id="email"
          onChange={props.onFieldChange}
        />
        <label className={classes.form__label} htmlFor="email">
          Email Address
        </label>
      </div>
      <div className={classes.form__group}>
        <input
          placeholder="User Name"
          autoComplete="off"
          data-error=""
          className={classes.form__input}
          type="text"
          required
          name="name"
          id="name"
          onChange={props.onFieldChange}
        />
        <label className={classes.form__label} htmlFor="name">
          User Name
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
