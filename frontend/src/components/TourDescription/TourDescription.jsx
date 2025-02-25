import React from 'react';
import classes from './TourDescription.module.scss';
import image1 from '../../assets/qudra-image-1.jpeg';
import image2 from '../../assets/qudra-image-2.jpg';
import image3 from '../../assets/qudra-image-3.jpg';
import config from '../../config';
const addDefaultSrc = (event, imageFile) => {
  event.target.src = imageFile;
};
const TourDescription = (props) => {
  let imgHtml;
  const tempImg = [image1, image2, image3];
  imgHtml = props.desc.images.map((img, i) => {
    return (
      <img
        key={i}
        src={`${config.IMAGES_PATH}/tours/${img}`}
        alt={`tour place ${i + 1}`}
        onError={(e) => {
          addDefaultSrc(e, tempImg[i]);
        }}
      />
    );
  });
  return (
    <div className={classes.description}>
      <p className={classes.description__text}>{props.desc.description}</p>
      {props.desc.images.length > 0 && (
        <div className={classes.description__photo}>{imgHtml}</div>
      )}
    </div>
  );
};
export default TourDescription;
