import React from 'react';
import classes from './Shimmer.module.scss';

const Shimmer = (props) => {
  return (
    <div className={classes.loader}>
      <div className={classes.loader__item}></div>
      <div className={classes.loader__item}></div>
      <div className={classes.loader__item}></div>
    </div>
  );
};
export default Shimmer;
