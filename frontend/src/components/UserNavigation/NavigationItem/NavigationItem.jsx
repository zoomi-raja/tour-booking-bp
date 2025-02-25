import React from 'react';
import classes from './NavigationItem.module.scss';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
  return (
    <li className={classes.navigation__item}>
      <NavLink to={props.link} className={({isActive}) => (isActive ? classes.active : 'none')}>
        {props.text}
      </NavLink>
    </li>
  );
};
export default NavigationItem;
