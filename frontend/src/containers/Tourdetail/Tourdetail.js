import React from 'react';
import coverPhoto from '../../assets/qudra-lake-cover.jpg';
import svgSprite from '../../assets/icons.svg';
import classes from './Tourdetail.module.scss';
import axios from '../../utils/Axios';
import TourDescription from '../../components/TourDescription/TourDescription';
import TourStats from '../../components/TourStats/TourStats';
import Map from '../../components/Map/Map';
import Reviews from '../../components/Reviews/Reviews';
class Tourdetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tour: {},
    };
  }
  async componentDidMount() {
    try {
      const tour = await axios.get(`/tours/${this.props.match.params.id}`);
      this.setState({ tour: tour.data.data.tour });
    } catch (err) {
      alert(err.message);
    }
  }
  render() {
    return (
      <section id="tour-detail">
        <div
          className={classes.detail_cover}
          style={{
            background: `url(${coverPhoto}) no-repeat center center/cover`,
          }}
        ></div>
        <div className={['container', classes.container].join(' ')}>
          <div className={classes['detail-heading']}>
            <h1 className={classes['detail-heading__title']}>
              the desert adventure
            </h1>
            <div className={classes['detail-heading__info']}>
              <div className={classes['detail-icons']}>
                <svg className={classes['detail-icons__icon']}>
                  <use xlinkHref={`${svgSprite}#icon-calendar`}></use>
                </svg>
                <span>4 days</span>
              </div>
              <div className={classes['detail-icons']}>
                <svg className={classes['detail-icons__icon']}>
                  <use xlinkHref={`${svgSprite}#icon-location-pin`}></use>
                </svg>
                <span>Qudra lake</span>
              </div>
              <div className={classes['detail-icons']}>
                <svg className={classes['detail-icons__icon']}>
                  <use xlinkHref={`${svgSprite}#icon-user`}></use>
                </svg>
                <span>15 People</span>
              </div>
            </div>
          </div>
          <div className="bottom-line"></div>
          <TourDescription />
          <TourStats />
          <Map />
          <Reviews />
        </div>
      </section>
    );
  }
}
export default Tourdetail;
