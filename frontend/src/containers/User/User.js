import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './User.module.scss';
// temp img
import img from '../../assets/qudra-lake.jpg';
class User extends React.Component {
  render() {
    return (
      <section id="user-details">
        <div className={classes.container + ' container'}>
          <ul className={classes.navigation}>
            <li className={classes.navigation__item}>
              <NavLink to="account" activeClassName={classes.active}>
                my account
              </NavLink>
            </li>
            <li className={classes.navigation__item}>
              <NavLink to="tours" activeClassName={classes.active}>
                my tours
              </NavLink>
            </li>
            <li className={classes.navigation__item}>
              <NavLink to="/logout" activeClassName={classes.active}>
                logout
              </NavLink>
            </li>
          </ul>
          <div className={classes.sectionHolder}>
            <h1 className={classes.sectionHolder__title + ' mb-2'}>My tours</h1>
            <div className={classes.sectionHolder__data}>
              <div className={classes.tour_card}>
                <div className={classes.tour_card__img}>
                  <img src={img} alt="qudra lake" />
                </div>
                <div className={classes.tour_card__desc}>
                  <div className={classes.tour_card__desc__tile}>
                    <h2>The Forest Hiker</h2>(
                    <span className={classes.location}>
                      &nbsp; Banff,CAN &nbsp;
                    </span>
                    )
                    <span className={classes.status + ' ' + classes.paid}>
                      Paid
                    </span>
                  </div>
                  <p className={classes.summary}>
                    Exploring the jaw-dropping US east coast by foot and by boat
                  </p>
                  <div className={classes.stats}>
                    <div className={classes.stats__item}>
                      <span className={classes.stats__key}>Price :</span>
                      <span>&#36; 497</span>
                    </div>
                    <div className={classes.stats__item}>
                      <span className={classes.stats__key}>Duration :</span>
                      <span>7 Days</span>
                    </div>
                    <div className={classes.stats__item}>
                      <span className={classes.stats__key}>People :</span>
                      <span>15</span>
                    </div>
                    <div className={classes.stats__item}>
                      <span className={classes.stats__key}>Stops :</span>
                      <span>3</span>
                    </div>
                    <div className={classes.stats__item}>
                      <span className={classes.stats__key}>
                        Date Purchased :
                      </span>
                      <span>Jun 19, 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default User;
