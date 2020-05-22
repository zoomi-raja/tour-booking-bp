import React from 'react';
import UserNavigation from '../../components/UserNavigation/UserNavigation';
import classes from './User.module.scss';
import { Switch, Route } from 'react-router-dom';

import Tours from '../../components/Tours/Tours';
import UserAccount from '../../components/UserAccount/UserAccount';
class User extends React.Component {
  render() {
    return (
      <section id="user-details">
        <div className={classes.container + ' container'}>
          <UserNavigation />
          <div className={classes.sectionHolder}>
            <Switch>
              <Route path="/user/account" component={UserAccount} />
              <Route path="/user/tours" component={Tours} />
            </Switch>
          </div>
        </div>
      </section>
    );
  }
}
export default User;
