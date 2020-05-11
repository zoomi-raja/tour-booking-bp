import React from 'react';
import classes from './Reviews.module.scss';
import Review from './Review/Review';
import axios from '../../utils/Axios';
import Spinner from '../UI/Spinner/Spinner';
class Reviews extends React.Component {
  state = {
    reviews: [],
    loading: true,
  };
  async componentDidMount() {
    const reviews = await axios.get(`/tours/${this.props.tourId}/reviews`);
    this.setState({ reviews: reviews.data.data.review, loading: false });
  }
  render() {
    let html;
    if (this.state.loading) {
      html = (
        <div style={{ backgroundColor: '#fff' }}>
          <Spinner />
        </div>
      );
    } else {
      let reviews = this.state.reviews.map((review, i) => (
        <Review key={i} {...review} />
      ));
      html = <div className={classes.review}>{reviews}</div>;
    }
    return html;
  }
}
export default Reviews;
