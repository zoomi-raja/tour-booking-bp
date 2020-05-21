import React from 'react';
import classes from './UserAccount.module.scss';
import Aux from '../../hoc/Aux';
// forms
import UserDetail from '../form/UserDetail';
import PasswordUpdate from '../form/UpdatePassword';

import placeHolder from '../../assets/no_avatar.png';
const UserAccount = (props) => {
  return (
    <Aux>
      <h1 className={classes.sectionHolder__title}>Your Account settings</h1>
      <div className={classes.sectionHolder__data}>
        <div className={classes.userSetting}>
          <figure className={classes.userSetting__avatar}>
            <img src={placeHolder} alt="User" />
            <figcaption className={classes.userSetting__avatar__caption}>
              Edit
            </figcaption>
          </figure>
        </div>

        <div
          className={classes.borderBottom}
          style={{ margin: '0 25rem' }}
        ></div>
        <UserDetail />
        <div
          className={classes.borderBottom}
          style={{ margin: '0 2rem' }}
        ></div>
        <PasswordUpdate />
      </div>
    </Aux>
  );
};
export default UserAccount;
