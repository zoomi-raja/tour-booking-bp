import React from 'react';
import UserNavigation from '../../components/UserNavigation/UserNavigation';
import classes from './User.module.scss';
import { Routes, Route, Navigate } from 'react-router-dom';

import Tours from '../../components/Tours/Tours';
import UserAccount from '../../components/UserAccount/UserAccount';
import { connect } from 'react-redux';
class User extends React.Component {
  componentDidMount() {}
  render() {
    let html;
    if (this.props.isAuthenticated) {
      html = (
        <Routes>
          <Route path="/user/account" component={UserAccount} />
          <Route path="/user/tours" component={Tours} />
        </Routes>
      );
    } else {
      html = (
        <Navigate to={`/auth/login?path=${this.props.location.pathname}`} />
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
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.token,
  };
};
export default connect(mapStateToProps)(User);
