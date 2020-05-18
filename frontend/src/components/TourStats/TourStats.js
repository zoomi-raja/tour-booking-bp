import React, { useState } from 'react';
import classes from './TourStats.module.scss';
import svgSprite from '../../assets/icons.svg';
import tourGuide from './zoomi.jpeg';
import Button from '../UI/Button/Button';
import axios from '../../utils/Axios';
// stripe
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_hHR7Lrw7Dii4oWxrN8XMjTLL00QcU9lqxb');

const useThisFunction = (obj, toggleLoading) => {
  return async () => {
    try {
      toggleLoading(true);
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${localStorage.getItem('token')}`;
      const sessionDetail = await axios.get(
        `/bookings/checkout-session/${obj.tourID}`
      );
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({
        sessionId: sessionDetail.data.session.id,
      });
    } catch (error) {
      console.log(error);
      toggleLoading(false);
    }
  };
};
const TourStats = (props) => {
  const [loading, toggleLoading] = useState(false);
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
        <Button
          btnType="btn--primary"
          btnSize="btn--small"
          classes="mt-1"
          disabled={loading}
          clicked={useThisFunction({ tourID: props.id }, toggleLoading)}
        >
          {loading ? 'loading' : 'Book now'}
        </Button>
      </div>
    </div>
  );
};
export default TourStats;
