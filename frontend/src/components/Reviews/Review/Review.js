import React from 'react';
import classes from './Review.module.scss';
import svgSprite from '../../../assets/icons.svg';
import tourGuide from './zoomi.jpeg';
const Review = (props) => {
  return (
    <div className={classes.review__card}>
      <figure className={classes.review__img}>
        <img src={tourGuide} alt="user" />
      </figure>
      <div className={classes.review__desc}>
        <div className={classes.review__header}>
          <p>
            zoomi<span>Created at: Sep 2019</span>
          </p>
          <div className={classes.review__rating}>
            <svg
              className={[
                classes.reviews__star,
                classes['reviews__star--active'],
              ].join(' ')}
            >
              <use xlinkHref={`${svgSprite}#icon-star`}></use>
            </svg>
            <svg
              className={[
                classes.reviews__star,
                classes['reviews__star--active'],
              ].join(' ')}
            >
              <use xlinkHref={`${svgSprite}#icon-star`}></use>
            </svg>
            <svg
              className={[
                classes.reviews__star,
                classes['reviews__star--active'],
              ].join(' ')}
            >
              <use xlinkHref={`${svgSprite}#icon-star`}></use>
            </svg>
            <svg className={classes.reviews__star}>
              <use xlinkHref={`${svgSprite}#icon-star`}></use>
            </svg>
            <svg className={classes.reviews__star}>
              <use xlinkHref={`${svgSprite}#icon-star`}></use>
            </svg>
          </div>
        </div>
        <div className={classes.review__text}>
          want to complete the template. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eum, perspiciatis ad voluptatibus ullam iusto natus
          praesentium pariatur temporibus sapiente ea quis consectetur magni
          velit, vitae consequatur, soluta quisquam dolorem?
        </div>
      </div>
    </div>
  );
};
export default Review;
