import React from 'react';
import classes from './Results.module.scss';
import Item from './Item/Item';
import { connect } from 'react-redux';
import * as searchAction from '../../store/actions/search/action';

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
        to={`/search?text=${props.searchStr}`}
        text={`Total ${props.count} Results Found`}
        location="View All"
        onClick={(e) => {
          props.updateSearch(props.searchStr);
          props.clearData();
        }}
      />
    );
  } else if (props.touched) {
    Results.push(
      <Item
        to=""
        key={0}
        text={`Total ${props.count} Results Found`}
        location="No Record Found"
        onClick={(e) => {
          e.preventDefault();
        }}
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
const mapDispatchToProps = (dispatch) => {
  return {
    updateSearch: (text) => {
      dispatch(searchAction.updateSearch(text));
    },
  };
};
export default connect(null, mapDispatchToProps)(Results);
