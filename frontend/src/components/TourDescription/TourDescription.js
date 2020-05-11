import React from 'react';
import classes from './TourDescription.module.scss';
import image1 from '../../assets/qudra-image-1.jpeg';
import image2 from '../../assets/qudra-image-2.jpg';
import image3 from '../../assets/qudra-image-3.jpg';
const TourDescription = (props) => {
  return (
    <div className={classes.description}>
      <div className={classes.description__text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum!
      </div>
      <div className={classes.description__photo}>
        <img src={image1} alt="tour place 1" />
        <img src={image2} alt="tour place 2" />
        <img src={image3} alt="tour place 3" />
      </div>
    </div>
  );
};
export default TourDescription;
