import React from 'react';
import Aux from '../../hoc/Aux';
import Tour from './Tour/Tour';
import classes from './Tours.module.scss';
import Showcase from '../Header/Showcase/Showcase';
const Tours = (props) => {
  const tours = [];
  for (let i = 0; i < 6; i++) {
    tours.push(<Tour key={i} />);
  }
  return (
    <Aux>
      <Showcase />
      <section id="tours" className="container pt-6">
        <div className={classes.tour_cards}>{tours}</div>
      </section>
    </Aux>
  );
};
export default Tours;