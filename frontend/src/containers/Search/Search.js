import React from 'react';
import svgSprite from '../../assets/icons.svg';
import classes from './Search.module.scss';
import Results from '../../components/Results/Results';
import axios from '../../utils/Axios';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      text: '',
      count: 0,
      loading: false,
      touched: false,
    };
    document.addEventListener('click', this.handleClick);
  }
  handleClick = (e) => {
    if (this.container) {
      if (!this.container.contains(e.target)) {
        setTimeout(() => {
          this.clearSearch();
        }, 200);
      }
    }
  };
  initQuery = async (event) => {
    let text = event.target.value;
    this.setState({ ...this.state, text });
    if (text.length >= 3 && !this.state.loading) {
      this.setState({ ...this.state, text, loading: true });
      const results = await axios.get(
        `/tours?search=${text}&sort=price,duration&fields=startLocation,name,duration&limit=5`
      );
      this.setState({
        ...this.state,
        results: results.data.data.tours,
        count: results.data.count,
        loading: false,
        touched: true,
      });
    }
  };
  clearSearch = () => {
    // move it to stack
    this.setState({ results: [], count: 0, text: '', touched: false });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    let html = (
      <Results
        searchStr={this.state.text}
        tours={this.state.results}
        count={this.state.count}
        clearData={this.clearSearch}
        touched={this.state.touched}
      />
    );
    return (
      <div
        className={classes.container}
        ref={(node) => (this.container = node)}
      >
        <form className={classes.search} onSubmit={this.handleSubmit}>
          <input
            type="text"
            className={classes.search__input}
            placeholder="search tours"
            onChange={this.initQuery}
            value={this.state.text}
          ></input>
          <button className={classes.search__button}>
            <svg className={classes.search__button__icon}>
              <use xlinkHref={svgSprite + '#icon-magnifying-glass'}></use>
            </svg>
          </button>
          {html}
        </form>
      </div>
    );
  }
}
export default Search;
