import React from 'react';
import Tour from '../../components/Tour/Tour';
import classes from './Tours.module.scss';
import Showcase from '../../components/Header/Showcase/Showcase';
import CarouselContainer from '../CarouselContainer/CarouselContainer';
import axios from '../../utils/Axios';
import Spinner from '../../components/UI/Spinner/Spinner';
class Tours extends React.Component {
  state = {
    tours: [],
    loading: true,
  };
  async componentDidMount() {
    try {
      const tours = await axios.get('/tours');
      this.setState({
        tours: tours.data.data.tours,
        loading: false,
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    let tours = [];
    tours = this.state.tours.map((tour, i) => {
      return <Tour key={i} tour={tour} />;
    });
    let html;
    if (this.state.loading) {
      html = <Spinner />;
    } else {
      html = (
        <>
          <Showcase />
          <CarouselContainer />
          <section id="tours" className="container">
            <div className={classes.tour_cards}>{tours}</div>
          </section>
        </>
      );
    }
    return html;
  }
}
export default Tours;
