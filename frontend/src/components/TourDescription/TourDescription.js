import React from 'react';
import classes from './TourDescription.module.scss';
import image1 from '../../assets/qudra-image-1.jpeg';
import image2 from '../../assets/qudra-image-2.jpg';
import image3 from '../../assets/qudra-image-3.jpg';
const TourDescription = (props) => {
  return (
    <div className={classes.description}>
      <p className={classes.description__text}>{props.desc.description}</p>
      {props.desc.images.length > 0 && (
        <div className={classes.description__photo}>
          <img src={image1} alt="tour place 1" />
          <img src={image2} alt="tour place 2" />
          <img src={image3} alt="tour place 3" />
        </div>
      )}
    </div>
  );
};
export default TourDescription;
