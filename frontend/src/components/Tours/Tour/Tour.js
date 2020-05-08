import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Tour.module.scss';
import svgSprite from '../../../assets/icons.svg';
import tempImg from '../../../assets/qudra-lake.jpg';
const Tour = (props) => (
  <div className={classes.card}>
    <div className={classes.card__wrap}>
      <div className={classes.card__header}>
        <img src={tempImg} alt="tour" />
        <span className={classes.card__name}>The Sea Explorer</span>
      </div>
      <div className={classes.card__details}>
        <div className={classes.card__data}>
          <svg className={classes.card__icon}>
            <use xlinkHref={`${svgSprite}#icon-location-pin`}></use>
          </svg>
          <span>Miami, USA</span>
        </div>
        <div className={classes.card__data}>
          <svg className={classes.card__icon}>
            <use xlinkHref={`${svgSprite}#icon-calendar`}></use>
          </svg>
          <span>June 2021</span>
        </div>
        <div className={classes.card__data}>
          <svg className={classes.card__icon}>
            <use xlinkHref={`${svgSprite}#icon-flag`}></use>
          </svg>
          <span>4 stops</span>
        </div>
        <div className={classes.card__data}>
          <svg className={classes.card__icon}>
            <use xlinkHref={`${svgSprite}#icon-user`}></use>
          </svg>
          <span>15 people</span>
        </div>
      </div>
      <div className={classes.card__footer}>
        <div className={classes.card__footer_left}>
          <p>
            <span className={classes.card__footer_value}>$497</span>
            <span className={classes.card__footer_text}>per person</span>
          </p>
          <p className={classes.card__ratings}>
            <span className={classes.card__footer_value}>4.8</span>
            <span className={classes.card__footer_text}>rating (6)</span>
          </p>
        </div>
        <div className={classes.card__footer_right}>
          <Link className="btn btn--secondary btn--small" to="/tour/2">
            Details
          </Link>
        </div>
      </div>
    </div>
    <div className={classes.card__text_wrap}>
      <p className={classes.card__sub_heading}>MEDIUM 7-DAY TOUR</p>
      <h2 className={classes.card__text}>
        Exploring the jaw-dropping US east coast by foot and by boat
      </h2>
    </div>
  </div>
);
export default Tour;
