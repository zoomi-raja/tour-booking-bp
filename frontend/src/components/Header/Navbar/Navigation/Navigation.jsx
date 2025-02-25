import React from 'react';
import classes from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import NavUserItem from './NavUserItem/NavUserItem';
import NavItem from './NavItem/NavItem';
// redux
import { connect } from 'react-redux';
const authLinks = [
  { to: '/user/account', text: 'my account' },
  { to: '/user/tours', text: 'my tours' },
  { to: '/logout', text: 'logout' },
];
const navigation = (props) => {
  let html = (
    <ul className={classes.menu}>
      <li>
        <span>
          <NavLink to="/auth/login" className={({isActive}) => (isActive ? classes.active : 'none')}>
            login
          </NavLink>
        </span>
      </li>
      <li>
        <span>
          <NavLink to="/auth/signup" className={({isActive}) => (isActive ? classes.active : 'none')}>
            signup
          </NavLink>
        </span>
      </li>
    </ul>
  );
  if (props.isAuthenticated) {
    const navItems = authLinks.map((item, index) => {
      return <NavItem key={index} {...item} />;
    });
    html = (
      <>
        <NavUserItem photo={props.user.photo} name={props.user.name} />
        <ul className={classes.subMenu}>{navItems}</ul>
      </>
    );
  }
  return <nav className={classes.nav_list}>{html}</nav>;
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.token,
    user: state.auth.user,
  };
};
export default connect(mapStateToProps)(navigation);
