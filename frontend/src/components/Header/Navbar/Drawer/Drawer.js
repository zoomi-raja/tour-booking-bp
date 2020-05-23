import React from 'react';
import classes from './Drawer.module.scss';
import UserNavItem from '../Navigation/NavUserItem/NavUserItem';
import NavItem from '../Navigation/NavItem/NavItem';

const Drawer = (props) => {
  let html, links;
  if (props.isAuthenticated) {
    html = <UserNavItem photo={props.user.photo} name={props.user.name} />;
    links = [
      { to: '/user/account', text: 'my account' },
      { to: '/user/tours', text: 'my tours' },
      { to: '/logout', text: 'logout' },
    ];
  } else {
    links = [
      { to: '/auth/login', text: 'login' },
      { to: '/auth/signup', text: 'signup' },
    ];
  }
  const navItems = links.map((item, index) => {
    return <NavItem key={index} {...item} clicked={props.closeBackdrop} />;
  });
  return (
    <div
      className={
        !props.displayBackdrop
          ? classes.drawer
          : classes.drawer + ' ' + classes.drawer__open
      }
    >
      <div className={classes.drawer__header}>{html}</div>
      <ul className={classes.drawer__nav}>{navItems}</ul>
    </div>
  );
};
export default Drawer;
