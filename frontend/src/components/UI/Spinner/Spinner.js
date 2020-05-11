import React from 'react';
import classes from './Spinner.module.scss';
const spinner = (props) => (
  <div className={classes.Loader} style={props.style}>
    Loading...
  </div>
);
export default spinner;
