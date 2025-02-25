import React from 'react';
import { Link } from 'react-router-dom';
import appLogo from '../../assets/logo.png';
import classes from './logo.module.scss';
const logo = () => (
  <Link className={classes.logo} to="/">
    <img src={appLogo} alt="logo" />
  </Link>
);
export default logo;
