import React from 'react';
import { Cards } from '../components/Cards';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';
const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    totalResults: 0,
    error: '',
    preloader: false,
  };

  handleSearch = (searchString, filter) => {
    this.setState({ preloader: true }, () => {
      this.handleRequest(searchString, filter);
    });
  };

  handleRequest = (searchString, filter) => {
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchString}&type=${
        filter !== 'all' ? filter : ''
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'True')
          this.setState({
            movies: data.Search,
            totalResults: data.totalResults,
            error: '',
            preloader: false,
          });
        else
          this.setState({
            movies: [],
            totalResults: 0,
            error: data.Error,
            preloader: false,
          });
      })
      .catch((e) => console.log(e.message));
  };

  render() {
    return (
      <main className="container content">
        <Search handleSearch={this.handleSearch} />
        {this.state.error !== '' ? (
          <p>{this.state.error}</p>
        ) : this.state.preloader ? (
          <Preloader />
        ) : this.state.totalResults !== 0 ? (
          <p>{this.state.totalResults} total results</p>
        ) : (
          ''
        )}
        {this.state.movies.length !== 0 && <Cards movies={this.state.movies} />}
      </main>
    );
  }
}

export { Main };
