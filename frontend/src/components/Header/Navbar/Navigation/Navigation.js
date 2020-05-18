import React from 'react';
import classes from './Navigation.module.scss';
import { NavLink, Link } from 'react-router-dom';
import svgSprite from '../../../../assets/icons.svg';
import placeHolder from '../../../../assets/no_avatar.png';

import Aux from '../../../../hoc/Aux';
// redux
import { connect } from 'react-redux';
const navigation = (props) => {
  let html = (
    <ul className={classes.menu}>
      <li>
        <span>
          <NavLink to="/auth/login" activeClassName={classes.active}>
            login
          </NavLink>
        </span>
      </li>
      <li>
        <span>
          <NavLink to="/auth/signup" activeClassName={classes.active}>
            signup
          </NavLink>
        </span>
      </li>
    </ul>
  );
  if (props.isAuthenticated) {
    html = (
      <Aux>
        <div className={classes.user}>
          <img className={classes.user__avatar} src={placeHolder} alt="owner" />
          <span className={classes.user__name}>{props.user.name}</span>
          <svg className={classes.user__icon}>
            <use xlinkHref={`${svgSprite}#icon-chevron-small-down`}></use>
          </svg>
        </div>
        <ul className={classes.subMenu}>
          <li className={classes.subMenu__item}>
            <Link to="/logout">logout</Link>
          </li>
          <li className={classes.subMenu__item}>sample item</li>
        </ul>
      </Aux>
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
