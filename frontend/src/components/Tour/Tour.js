import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Tour.module.scss';
import svgSprite from '../../assets/icons.svg';
import tempImg from '../../assets/qudra-lake.jpg';
import Button from '../UI/Button/Button';
const Tour = (props) => {
  const date = new Date(props.tour.startDates[0]).toLocaleString('en-us', {
    month: 'short',
    year: 'numeric',
    day: '2-digit',
  });
  const history = useHistory();
  return (
    <div className={classes.card}>
      <div className={classes.card__wrap}>
        <div className={classes.card__header}>
          <img src={tempImg} alt="tour" />
          <span className={classes.card__name}>{props.tour.name}</span>
        </div>
        <div className={classes.card__details}>
          <div className={classes.card__data}>
            <svg className={classes.card__icon}>
              <use xlinkHref={`${svgSprite}#icon-location-pin`}></use>
            </svg>
            <span>{props.tour.startLocation.description}</span>
          </div>
          <div className={classes.card__data}>
            <svg className={classes.card__icon}>
              <use xlinkHref={`${svgSprite}#icon-calendar`}></use>
            </svg>
            <span>{date}</span>
          </div>
          <div className={classes.card__data}>
            <svg className={classes.card__icon}>
              <use xlinkHref={`${svgSprite}#icon-flag`}></use>
            </svg>
            <span>{props.tour.locations.length} stops</span>
          </div>
          <div className={classes.card__data}>
            <svg className={classes.card__icon}>
              <use xlinkHref={`${svgSprite}#icon-user`}></use>
            </svg>
            <span>{props.tour.maxGroupSize} people</span>
          </div>
        </div>
        <div className={classes.card__footer}>
          <div className={classes.card__footer_left}>
            <p>
              <span className={classes.card__footer_value}>
                ${props.tour.price}
              </span>
              <span className={classes.card__footer_text}>per person</span>
            </p>
            <p className={classes.card__ratings}>
              <span className={classes.card__footer_value}>
                {props.tour.ratingsAverage}
              </span>
              <span className={classes.card__footer_text}>
                rating ({props.tour.ratingsQuantity})
              </span>
            </p>
          </div>
          <div className={classes.card__footer_right}>
            <Button
              btnType="btn--secondary"
              btnSize="btn--small"
              clicked={() => {
                history.push(`/tour/${props.tour.id}`);
              }}
            >
              Details
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.card__text_wrap}>
        <p className={classes.card__sub_heading}>
          {props.tour.difficulty.toUpperCase()} {props.tour.duration}-DAY TOUR
        </p>
        <h2 className={classes.card__text}>{props.tour.summary}</h2>
      </div>
    </div>
  );
};
export default Tour;
