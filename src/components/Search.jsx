import React from 'react';
class Search extends React.Component {
  state = {
    search: '',
    filter: '',
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value }, () => {
      if (this.state.search !== '')
        this.props.handleSearch(this.state.search, this.state.filter);
    });
  };

  componentDidMount() {
    this.setState({ filter: 'all' });
  }

  render() {
    return (
      <div>
        <div className="row search-field">
          <div className="input-field col s6">
            <input
              type="text"
              className="validate"
              placeholder="Search"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyPress={(e) =>
                e.key === 'Enter' &&
                this.props.handleSearch(this.state.search, this.state.filter)
              }
            />
          </div>
          <div className="input-field col s6">
            <button
              className="btn waves-effect waves-light"
              name="submit"
              onClick={this.handleFilter}
            >
              Search
            </button>
          </div>
        </div>
        <div className="radio-div">
          <label>
            <input
              name="filter"
              className="with-gap"
              type="radio"
              value="all"
              onChange={this.handleFilter}
              checked={this.state.filter === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="filter"
              className="with-gap"
              type="radio"
              value="movie"
              onChange={this.handleFilter}
              checked={this.state.filter === 'movie'}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              name="filter"
              className="with-gap"
              type="radio"
              value="series"
              onChange={this.handleFilter}
              checked={this.state.filter === 'series'}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
