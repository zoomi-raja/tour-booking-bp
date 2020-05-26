import React from 'react';
import svgSprite from '../../assets/icons.svg';
import classes from './Search.module.scss';
const search = (props) => (
  <form action="#" className={classes.search}>
    <input
      type="text"
      className={classes.search__input}
      placeholder="search tours"
    />
    <button className={classes.search__button}>
      <svg className={classes.search__button__icon}>
        <use xlinkHref={svgSprite + '#icon-magnifying-glass'}></use>
      </svg>
    </button>
  </form>
);
export default search;
