import React from 'react';
import classes from './UserAccount.module.scss';
import Aux from '../../hoc/Aux';
// forms
import UploadPhoto from '../UploadPhoto/UploadPhoto';
import UserDetail from '../form/UserDetail';
import PasswordUpdate from '../form/UpdatePassword';

const UserAccount = (props) => {
  return (
    <>
      <h1 className={classes.sectionHolder__title}>Your Account settings</h1>
      <div className={classes.sectionHolder__data}>
        <UploadPhoto />
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
    </>
  );
};
export default UserAccount;
