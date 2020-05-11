import React from 'react';
import classes from './Reviews.module.scss';
import Review from './Review/Review';
const Reviews = (props) => {
  let reviews = props.data.map((review, i) => <Review key={i} {...review} />);
  return <div className={classes.review}>{reviews}</div>;
};
export default Reviews;
