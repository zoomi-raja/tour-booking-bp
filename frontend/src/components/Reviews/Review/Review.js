import React from 'react';
import classes from './Review.module.scss';
import svgSprite from '../../../assets/icons.svg';
import tourGuide from './zoomi.jpeg';
const Review = (props) => {
  const rating = Math.ceil(props.rating);
  const totalRating = 5;
  const stars = [];
  for (let i = 0; i < totalRating; i++) {
    let className = classes.reviews__star;
    if (i < rating) {
      className = [
        classes.reviews__star,
        classes['reviews__star--active'],
      ].join(' ');
    }
    stars.push(
      <svg className={className} key={i}>
        <use xlinkHref={`${svgSprite}#icon-star`}></use>
      </svg>
    );
  }
  return (
    <div className={classes.review__card}>
      <figure className={classes.review__img}>
        <img src={tourGuide} alt="user" />
      </figure>
      <div className={classes.review__desc}>
        <div className={classes.review__header}>
          <p>
            {props.user.name}
            <span>
              Created at:{' '}
              {new Date(props.createdAt).toLocaleString('en-us', {
                month: 'short',
                year: 'numeric',
                day: '2-digit',
              })}
            </span>
          </p>
          <div className={classes.review__rating}>{stars}</div>
        </div>
        <div className={classes.review__text}>{props.review}</div>
      </div>
    </div>
  );
};
export default Review;
