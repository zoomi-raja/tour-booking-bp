import React from 'react';
import classes from './TourStats.module.scss';
import svgSprite from '../../assets/icons.svg';
import tourGuide from './zoomi.jpeg';
const TourStats = (props) => {
  const date = new Date(props.details.startDate[0]).toLocaleDateString(
    'en-us',
    {
      month: 'short',
      year: 'numeric',
      day: '2-digit',
    }
  );
  return (
    <div className={classes['key-details']}>
      <div className={classes.guides__section}>
        <h2>Your tour guides</h2>
        <div className={classes.guides}>
          <figure className={classes.guides__shape}>
            <img
              src={tourGuide}
              alt="shape"
              className={classes.guides__image}
            />
            <figcaption className={classes.guides__caption}>
              <span>lead Guide</span>zoomi
            </figcaption>
          </figure>
          <figure className={classes.guides__shape}>
            <img
              src={tourGuide}
              alt="shape"
              className={classes.guides__image}
            />
            <figcaption className={classes.guides__caption}>
              <span>Guide</span>zoomi
            </figcaption>
          </figure>
          <figure className={classes.guides__shape}>
            <img
              src={tourGuide}
              alt="shape"
              className={classes.guides__image}
            />
            <figcaption className={classes.guides__caption}>
              <span>Guide</span>zamurd ali
            </figcaption>
          </figure>
        </div>
      </div>
      <div className={classes['detail-box']}>
        <h2>Key Details</h2>
        <ul>
          <li className={classes['detail-box__detail']}>
            <svg className={classes['detail-box__icon']}>
              <use xlinkHref={`${svgSprite}#icon-calendar`}></use>
            </svg>
            <span className={classes['detail-box__label']}>Next date</span>
            <span className={classes['detail-box__text']}>{date}</span>
          </li>
          <li className={classes['detail-box__detail']}>
            <svg className={classes['detail-box__icon']}>
              <use xlinkHref={`${svgSprite}#icon-flag`}></use>
            </svg>
            <span className={classes['detail-box__label']}>DIFFICULTY</span>
            <span className={classes['detail-box__text']}>
              {props.details.difficulty}
            </span>
          </li>
          <li className={classes['detail-box__detail']}>
            <svg className={classes['detail-box__icon']}>
              <use xlinkHref={`${svgSprite}#icon-star`}></use>
            </svg>
            <span className={classes['detail-box__label']}>rating</span>
            <span className={classes['detail-box__text']}>
              {props.details.rating}/5
            </span>
          </li>
          <li className={classes['detail-box__detail']}>
            <svg className={classes['detail-box__icon']}>
              <use xlinkHref={`${svgSprite}#icon-price-tag`}></use>
            </svg>
            <span className={classes['detail-box__label']}>price</span>
            <span className={classes['detail-box__text']}>
              {props.details.price} &#36;
            </span>
          </li>
        </ul>
        <button className="btn btn--primary btn--small mt-1">Book now</button>
      </div>
    </div>
  );
};
export default TourStats;
