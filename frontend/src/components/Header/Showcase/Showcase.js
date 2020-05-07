import React from 'react';
import classes from './Showcase.module.scss';
const showcase = (props) => (
  <div className={classes.showcase}>
    <div className={classes.showcase__container}>
      <div className={classes.showcase__content}>
        <p>
          <b>Mark Twain said </b>“Travel is fatal to prejudice, bigotry, and
          narrow-mindedness, and many of our people need it sorely on these
          accounts. Broad, wholesome, charitable views of men and things cannot
          be acquired by vegetating in one little corner of the earth all one's
          lifetime.”
        </p>
      </div>
    </div>
  </div>
);
export default showcase;
