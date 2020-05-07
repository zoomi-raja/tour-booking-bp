import React from 'react';
import svgSprite from '../../assets/icons.svg';
import classes from './Footer.module.scss';
const Footer = (props) => (
  <footer id={classes.main_footer}>
    <div className={['container', classes.container].join(' ')}>
      <p>Copyright © 2020, All Rights Reserved</p>
      <div className={classes.social}>
        <a>
          <svg className={classes.social__icon}>
            <use xlinkHref={`${svgSprite}#icon-twitter`}></use>
          </svg>
        </a>
        <a>
          <svg className={classes.social__icon}>
            <use xlinkHref={`${svgSprite}#icon-facebook`}></use>
          </svg>
        </a>
        <a>
          <svg className={classes.social__icon}>
            <use xlinkHref={`${svgSprite}#icon-instagram`}></use>
          </svg>
        </a>
        <a>
          <svg className={classes.social__icon}>
            <use xlinkHref={`${svgSprite}#icon-linkedin`}></use>
          </svg>
        </a>
      </div>
    </div>
  </footer>
);
export default Footer;
