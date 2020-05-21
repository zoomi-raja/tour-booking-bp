import React from 'react';
import classes from './Tours.module.scss';
import TourCard from './TourCard/TourCard';
import Aux from '../../hoc/Aux';
import axios from '../../utils/Axios';

class Tours extends React.Component {
  state = {
    bookings: [],
  };
  async componentDidMount() {
    const tours = await axios.get('/bookings/');
    if (tours.data.results > 0) {
      this.setState({ bookings: tours.data.data.booking });
    }
  }
  render() {
    let bookings;
    bookings = this.state.bookings.map((tour, index) => {
      return <TourCard key={index} booking-data={tour} />;
    });
    return (
      <Aux>
        <h1 className={classes.sectionHolder__title}>My tours</h1>
        <div className={classes.sectionHolder__data}>
          <div className={classes.userTours}>{bookings}</div>
        </div>
      </Aux>
    );
  }
}
export default Tours;
