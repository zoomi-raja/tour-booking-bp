import React from 'react';
import classes from './SearchResults.module.scss';
import Spinner from '../UI/Spinner/Spinner';
import Tour from '../../components/Tour/Tour';
import { connect } from 'react-redux';
import * as searchAction from '../../store/actions/search/action';
class SearchResults extends React.Component {
  state = {
    tours: [],
    loading: true,
  };
  async componentDidMount() {
    try {
      const params = new URLSearchParams(this.props.location.search);
      let text = params.get('text');
      if (text) {
        this.props.updateSearch(text);
      }
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    let tours = [];
    tours = this.props.tours.map((tour, i) => {
      return <Tour key={i} tour={tour} />;
    });
    let html;
    if (this.props.loading) {
      html = <Spinner />;
    } else {
      html = (
        <section id="tours" className="container">
          <div className={classes.tour_cards}>{tours}</div>
        </section>
      );
    }
    return html;
  }
}
const mapStateToProps = (state) => {
  return {
    ...state.search,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateSearch: (text) => {
      dispatch(searchAction.updateSearch(text));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
