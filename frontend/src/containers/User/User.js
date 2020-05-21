import React from 'react';
import UserNavigation from '../../components/UserNavigation/UserNavigation';
import classes from './User.module.scss';

import Tours from '../../components/Tours/Tours';
class User extends React.Component {
  render() {
    return (
      <section id="user-details">
        <div className={classes.container + ' container'}>
          <UserNavigation />
          <div className={classes.sectionHolder}>
            <Tours />
          </div>
        </div>
      </section>
    );
  }
}
export default User;
