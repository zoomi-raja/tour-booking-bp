import React from 'react';
import classes from './NavUserItem.module.scss';
import placeHolder from '../../../../../assets/users/no_avatar.png';
import svgSprite from '../../../../../assets/icons.svg';
import config from '../../../../../config';

const addDefaultSrc = (event) => {
  event.target.src = placeHolder;
};

const NavUserItem = (props) => {
  return (
    <div className={classes.user}>
      <img
        className={classes.user__avatar}
        src={`${config.IMAGES_PATH}/users/${props.photo}`}
        onError={addDefaultSrc}
        alt="owner"
      />
      <span className={classes.user__name}>{props.name}</span>
      <svg className={classes.user__icon}>
        <use xlinkHref={`${svgSprite}#icon-chevron-small-down`}></use>
      </svg>
    </div>
  );
};
export default NavUserItem;
