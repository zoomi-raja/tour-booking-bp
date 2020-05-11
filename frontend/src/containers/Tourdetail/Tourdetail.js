import React from 'react';
import coverPhoto from '../../assets/qudra-lake-cover.jpg';
import svgSprite from '../../assets/icons.svg';
import classes from './Tourdetail.module.scss';
import image1 from '../../assets/qudra-image-1.jpeg';
import image2 from '../../assets/qudra-image-2.jpg';
import image3 from '../../assets/qudra-image-3.jpg';
import axios from '../../utils/Axios';
import Reviews from '../../components/Reviews/Reviews';
import tourGuide from './zoomi.jpeg';
import Map from '../../components/Map/Map';
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
          <div className={classes.description}>
            <div className={classes.description__text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum!
            </div>
            <div className={classes.description__photo}>
              <img src={image1} alt="tour place 1" />
              <img src={image2} alt="tour place 2" />
              <img src={image3} alt="tour place 3" />
            </div>
          </div>
          <div className={classes['key-details']}>
            <div className={classes.guides__section}>
              <h2>Your tour guides</h2>
              <div className={classes.guides}>
                <figure className={classes.guides__shape}>
                  <img
                    src={tourGuide}
                    alt="shape"
                    className={classes.guides__image}
                  />
                  <figcaption className={classes.guides__caption}>
                    <span>lead Guide</span>zoomi
                  </figcaption>
                </figure>
                <figure className={classes.guides__shape}>
                  <img
                    src={tourGuide}
                    alt="shape"
                    className={classes.guides__image}
                  />
                  <figcaption className={classes.guides__caption}>
                    <span>Guide</span>zoomi
                  </figcaption>
                </figure>
                <figure className={classes.guides__shape}>
                  <img
                    src={tourGuide}
                    alt="shape"
                    className={classes.guides__image}
                  />
                  <figcaption className={classes.guides__caption}>
                    <span>Guide</span>zamurd ali
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className={classes['detail-box']}>
              <h2>Key Details</h2>
              <ul>
                <li className={classes['detail-box__detail']}>
                  <svg className={classes['detail-box__icon']}>
                    <use xlinkHref={`${svgSprite}#icon-calendar`}></use>
                  </svg>
                  <span className={classes['detail-box__label']}>
                    Next date
                  </span>
                  <span className={classes['detail-box__text']}>June 2021</span>
                </li>
                <li className={classes['detail-box__detail']}>
                  <svg className={classes['detail-box__icon']}>
                    <use xlinkHref={`${svgSprite}#icon-flag`}></use>
                  </svg>
                  <span className={classes['detail-box__label']}>
                    DIFFICULTY
                  </span>
                  <span className={classes['detail-box__text']}>medium</span>
                </li>
                <li className={classes['detail-box__detail']}>
                  <svg className={classes['detail-box__icon']}>
                    <use xlinkHref={`${svgSprite}#icon-star`}></use>
                  </svg>
                  <span className={classes['detail-box__label']}>rating</span>
                  <span className={classes['detail-box__text']}>4.8/5</span>
                </li>
                <li className={classes['detail-box__detail']}>
                  <svg className={classes['detail-box__icon']}>
                    <use xlinkHref={`${svgSprite}#icon-price-tag`}></use>
                  </svg>
                  <span className={classes['detail-box__label']}>price</span>
                  <span className={classes['detail-box__text']}>23 USD</span>
                </li>
              </ul>
              <a className="btn btn--primary btn--small mt-1" href="/tour/2">
                Book now
              </a>
            </div>
          </div>
          <Map />
          <Reviews />
        </div>
      </section>
    );
  }
}
export default Tourdetail;
