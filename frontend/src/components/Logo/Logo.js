import React from 'react';
import appLogo from '../../assets/logo.png';
import classes from './logo.module.scss';
const logo = (props) => (
  <div className="logo">
    <img src={appLogo} alt="logo" />
  </div>
);
export default logo;
