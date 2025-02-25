import React from 'react';
import classes from './Toggler.module.scss';
const toggler = (props) => {
  return (
    <div className={classes.toggler}>
      <input
        className={classes.toggler__input}
        id="toggle-menu"
        type="checkbox"
        name="toggle-menu"
        onChange={props.toggleDrawer}
        checked={props.value}
      />
      <label htmlFor="toggle-menu">
        <div className={classes.toggler__icon}></div>
      </label>
    </div>
  );
};
export default toggler;
