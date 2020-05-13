import React from 'react';
import classes from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
const navigation = (props) => (
  <nav className={classes.nav_list}>
    <ul>
      <li>
        <span>
          <NavLink to="/auth/login" activeClassName={classes.active}>
            login
          </NavLink>
        </span>
      </li>
      <li>
        <span>
          <NavLink to="/auth/signup" activeClassName={classes.active}>
            signup
          </NavLink>
        </span>
      </li>
    </ul>
  </nav>
);
export default navigation;
