import React, { useState, useRef } from 'react';
import classes from './Carousel.module.scss';
import svgSprite from '../../assets/icons.svg';

import Tour from '../Tour/Tour';

const initState = {
  clicked: false,
};
const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};
const scroll = (element, change, duration, setState) => {
  let start = element.scrollLeft,
    currentTime = 0,
    increment = 20;

  let animateScroll = function () {
    currentTime += increment;
    let val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollLeft = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    } else {
      setState({ clicked: false });
    }
  };
  animateScroll();
};
const Carousel = (props) => {
  const [state, setState] = useState(initState);
  let carouselItems = props.items.map((item, i) => {
    return <Tour key={i} tour={item} />;
  });
  const containerRef = useRef();
  const carouselRef = useRef();
  return (
    <div className={classes.carousel} ref={containerRef}>
      <a
        href="#"
        className={`${classes.carousel__arrow} ${classes['carousel__arrow--left']}`}
        onClick={(e) => {
          e.preventDefault();
          if (!state.clicked) {
            setState({ clicked: true });
            scroll(
              carouselRef.current,
              -carouselRef.current.offsetWidth,
              1000,
              setState
            );
          }
        }}
      >
        <svg className={classes.carousel__arrow__icon}>
          <use xlinkHref={`${svgSprite}#icon-chevron-thin-left`}></use>
        </svg>
      </a>
      <div className={classes.carousel__content} ref={carouselRef}>
        {carouselItems}
      </div>
      <a
        href="#"
        className={`${classes.carousel__arrow} ${classes['carousel__arrow--right']}`}
        onClick={(e) => {
          e.preventDefault();
          if (!state.clicked) {
            setState({ clicked: true });
            scroll(
              carouselRef.current,
              carouselRef.current.offsetWidth,
              1000,
              setState
            );
          }
        }}
      >
        <svg className={classes.carousel__arrow__icon}>
          <use xlinkHref={`${svgSprite}#icon-chevron-thin-right`}></use>
        </svg>
      </a>
    </div>
  );
};
export default Carousel;
