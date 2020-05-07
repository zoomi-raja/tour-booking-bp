import React from 'react';
import classes from './Navigation.module.scss';
const navigation = (props) => (
  <nav className={classes.nav_list}>
    <ul>
      <li>
        <span>
          <a href="#">login</a>
        </span>
      </li>
      <li>
        <span>
          <a href="#">signup</a>
        </span>
      </li>
    </ul>
  </nav>
);
export default navigation;
