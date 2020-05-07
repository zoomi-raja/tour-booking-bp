import React from 'react';
import Tour from './Tour/Tour';
import classes from './Tours.module.scss';
const Tours = (props) => {
  const tours = [];
  for (let i = 0; i < 6; i++) {
    tours.push(<Tour key={i} />);
  }
  return (
    <section id="tours" className="container pt-6">
      <div className={classes.tour_cards}>{tours}</div>
    </section>
  );
};
export default Tours;
