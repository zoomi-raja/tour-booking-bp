import React from 'react';
import Aux from '../../hoc/Aux';
import Tour from '../../components/Tour/Tour';
import classes from './Tours.module.scss';
import Showcase from '../../components/Header/Showcase/Showcase';
import axios from '../../utils/Axios';
class Tours extends React.Component {
  state = {
    tours: [],
  };
  async componentDidMount() {
    try {
      const tours = await axios.get('/tours');
      this.setState({ tours: tours.data.data.tours });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    let tours = [];
    tours = this.state.tours.map((tour, i) => {
      return <Tour key={i} tour={tour} />;
    });
    return (
      <Aux>
        <Showcase />
        <section id="tours" className="container pt-6">
          <div className={classes.tour_cards}>{tours}</div>
        </section>
      </Aux>
    );
  }
}
export default Tours;
