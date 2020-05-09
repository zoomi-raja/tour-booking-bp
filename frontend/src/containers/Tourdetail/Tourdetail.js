import React from 'react';
import coverPhoto from '../../assets/qudra-lake-cover.jpg';
import svgSprite from '../../assets/icons.svg';
import classes from './Tourdetail.module.scss';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import image1 from '../../assets/qudra-image-1.jpeg';
import image2 from '../../assets/qudra-image-2.jpg';
import image3 from '../../assets/qudra-image-3.jpg';
mapboxgl.accessToken =
  'pk.eyJ1Ijoiem9vbWktcmFqYSIsImEiOiJjazl6NDhvMDcwdXN2M3RwazlzbzF4OWFiIn0.1n67PHfJehyEBhaym3zScQ';
class Tourdetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -118.113491,
      lat: 34.111745,
      zoom: 4,
    };
  }
  componentDidMount() {
    const cssUrl = 'https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css';
    const style = document.createElement('link');
    style.href = cssUrl;
    style.rel = 'stylesheet';
    style.async = true;

    document.head.appendChild(style);
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/zoomi-raja/ck9z6jm6j2rhz1io9fektfzw9',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
    var marker = new mapboxgl.Marker()
      .setLngLat([-118.113491, 34.111745])
      .addTo(map);
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
          <div
            ref={(el) => (this.mapContainer = el)}
            className={classes.mapContainer}
          />
        </div>
      </section>
    );
  }
}
export default Tourdetail;
