import React from 'react';
import classes from './TourCard.module.scss';

// temp img
import img from '../../../assets/qudra-lake.jpg';

const TourCard = (props) => {
  const data = props['booking-data'];
  const payClass = data.paid ? classes.paid : classes.unpaid;
  return (
    <div className={classes.tour_card}>
      <div className={classes.tour_card__img}>
        <img src={img} alt="qudra lake" />
      </div>
      <div className={classes.tour_card__desc}>
        <div className={classes.tour_card__desc__tile}>
          <h2>{data.tour.name}</h2>(
          <span className={classes.location}>
            &nbsp; {data.tour.startLocation.description} &nbsp;
          </span>
          )<span className={classes.status + ' ' + payClass}>Paid</span>
        </div>
        <p className={classes.summary}>{data.tour.summary}</p>
        <div className={classes.stats}>
          <div className={classes.stats__item}>
            <span className={classes.stats__key}>Price :</span>
            <span>&#36; {data.price}</span>
          </div>
          <div className={classes.stats__item}>
            <span className={classes.stats__key}>Duration :</span>
            <span>{data.tour.duration} Days</span>
          </div>
          <div className={classes.stats__item}>
            <span className={classes.stats__key}>People :</span>
            <span>{data.tour.maxGroupSize}</span>
          </div>
          <div className={classes.stats__item}>
            <span className={classes.stats__key}>Stops :</span>
            <span>{data.tour.locations.length}</span>
          </div>
          <div className={classes.stats__item}>
            <span className={classes.stats__key}>Date Purchased :</span>
            <span>
              {new Date(data.createdAt).toLocaleString('en-us', {
                month: 'short',
                year: 'numeric',
                day: '2-digit',
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TourCard;
