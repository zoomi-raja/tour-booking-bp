import React from 'react';
import classes from './Button.module.css';
const button = (props) => (
  <button
    disabled={props.disabled}
    className={[
      classes.btn,
      classes[props.btnType],
      classes[props.btnSize],
      props.classes,
    ].join(' ')}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);
export default button;
