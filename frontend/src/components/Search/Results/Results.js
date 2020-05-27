import React from 'react';
import classes from './Results.module.scss';
import Item from './Item/Item';
const Results = (props) => {
  let Results = [];
  let style = {};
  if (props.tours.length > 0) {
    Results = props.tours.map((tour, i) => {
      return (
        <Item
          key={i + 1}
          to={`/tour/${tour.id}`}
          text={tour.name}
          location={tour.startLocation.description}
          onClick={props.clearData}
        />
      );
    });
    Results.unshift(
      <Item
        key={0}
        to={`/search?search=${props.searchStr}`}
        text={`Total ${props.count} Results Found`}
        location="View All"
        onClick={props.clearData}
      />
    );
  } else {
    style = { display: 'none' };
  }
  return (
    <ul className={classes.results} style={style}>
      {Results}
    </ul>
  );
};
export default Results;
