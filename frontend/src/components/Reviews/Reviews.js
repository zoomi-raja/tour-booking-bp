import React from 'react';
import classes from './Reviews.module.scss';
import Review from './Review/Review';
const Reviews = (props) => {
  return (
    <div className={classes.review}>
      <Review />
    </div>
  );
};
export default Reviews;
