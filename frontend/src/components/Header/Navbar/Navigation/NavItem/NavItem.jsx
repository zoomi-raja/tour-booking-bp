import React from 'react';
import classes from './NavItem.module.scss';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <li className={classes.subMenu__item} onClick={props.clicked}>
      <NavLink to={props.to} className={({isActive}) => (isActive ? classes.active : 'none')}>
        {props.text}
      </NavLink>
    </li>
  );
};
export default NavItem;
