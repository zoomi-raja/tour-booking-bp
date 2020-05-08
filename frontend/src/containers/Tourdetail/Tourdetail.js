import React from 'react';
import coverPhoto from '../../assets/qudra-lake-cover.jpg';
import svgSprite from '../../assets/icons.svg';
import classes from './Tourdetail.module.scss';
class Tourdetail extends React.Component {
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
        </div>
      </section>
    );
  }
}
export default Tourdetail;
