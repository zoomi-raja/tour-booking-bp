import React from 'react';
import classes from './Carousel.module.scss';
import Carousel from '../../components/Carousel/Carousel';
import Shimmer from '../../components/UI/Shimmer/Shimmer';
import axios from '../../utils/Axios';
import Aux from '../../hoc/Aux';

class CarouselContainer extends React.Component {
  state = {
    loading: true,
    carousel: [],
    range: 5,
    lat: 25.066006,
    lng: 55.137757,
  };
  getCoordinates() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
  async fetchData(lat, lng, range) {
    const geoApiURL = `/tours/tours-within/${range}/center/${lat},${lng}/unit/km/`;
    const results = await axios.get(geoApiURL);
    if (results.data.data.tour.length > 0) {
      const data = results.data.data.tour;
      this.setState({
        ...this.state,
        carousel: data,
        loading: false,
        lat,
        lng,
      });
    } else {
      this.setState({
        ...this.state,
        loading: false,
      });
    }
  }
  async componentDidMount() {
    if ('geolocation' in navigator) {
      try {
        const position = await this.getCoordinates();
        await this.fetchData(
          position.coords.latitude,
          position.coords.longitude,
          this.state.range
        );
        if (this.state.carousel.length === 0) {
          this.fetchData(this.state.lat, this.state.lng, this.state.range);
        }
      } catch (e) {
        this.setState({ ...this.state, loading: false });
      }
    }
    this.setState({ ...this.state, loading: false });
  }
  render() {
    let html;
    if (this.state.carousel.length > 0 || this.state.loading) {
      html = (
        <Aux>
          <h1>
            Locations near You...!
            <select
              value={this.state.range}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (Number.isInteger(value)) {
                  this.setState({ ...this.state, range: value, loading: true });
                  this.fetchData(this.state.lat, this.state.lng, value);
                }
              }}
            >
              <option value="5">5 KM</option>
              <option value="10">10 KM</option>
              <option value="20">20 KM</option>
              <option value="30">30 KM</option>
              <option value="40">40 KM</option>
              <option value="50">50 KM</option>
            </select>
          </h1>
          {!this.state.loading ? (
            <Carousel items={this.state.carousel} />
          ) : (
            <Shimmer />
          )}
        </Aux>
      );
    }
    return <div className={classes.carousal_wrapper}>{html}</div>;
  }
}
export default CarouselContainer;
