import React from 'react';
import Logo from '../../Logo/Logo';
import Search from '../../Search/Search';
import Navigation from './Navigation/Navigation';
import classes from './Navbar.module.scss';
const navbar = (props) => (
  <div className={classes.navbar}>
    <div className="container">
      <div className={classes.navbar_holder}>
        <Logo />
        <Search />
        <Navigation />
      </div>
    </div>
  </div>
);
export default navbar;
