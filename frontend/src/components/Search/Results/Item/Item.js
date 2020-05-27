import React from 'react';
import classes from './Item.module.scss';
import { Link } from 'react-router-dom';
const Item = (props) => {
  return (
    <li className={classes.rItem} onClick={props.onClick}>
      <Link to={props.to}>
        <span> {props.text} </span>
        <span> ( {props.location} )</span>
      </Link>
    </li>
  );
};
export default Item;
