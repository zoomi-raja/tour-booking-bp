import React from 'react';
import UserNavigation from '../../components/UserNavigation/UserNavigation';
import classes from './User.module.scss';
import { Navigate, Outlet } from 'react-router-dom';

import { connect } from 'react-redux';
const User = (props) => {
  let html;
  if (props.isAuthenticated) {
    html = (
      <Outlet />
    );
  } else {
    html = (
      <Navigate to={`/auth/login?path=${props.location.pathname}`} />
    );
  }
  return (
    <section id="user-details">
      <div className={classes.container + ' container'}>
        <UserNavigation />
        <div className={classes.sectionHolder}>{html}</div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.token,
  };
};
export default connect(mapStateToProps)(User);
