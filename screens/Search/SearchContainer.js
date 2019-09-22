import React from 'react';
import SearchPresetner from './SearchPresenter';
import { movies, tv } from '../../api';

export default class SearchContainer extends React.Component {
  state = {
    loading: false,
    movieResults: null,
    tvResults: null,
    searchTerm: '',
    error: null,
  };

  handleSearchUpdate = text => {
    this.setState({ searchTerm: text });
  };

  onSubmitEditing = async () => {
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      let movieResults, tvResults, error;

      this.setState({
        loading: true,
      });

      try {
        ({
          data: { results: movieResults },
        } = await movies.searchMovies(searchTerm));
        ({
          data: { results: tvResults },
        } = await tv.searchTv(searchTerm));
      } catch (error) {
        error = "Can't Search";
      } finally {
        this.setState({
          loading: false,
          movieResults,
          tvResults,
        });
      }

      return;
    }
  };

  render() {
    const { loading, movieResults, tvResults, searchTerm } = this.state;

    return (
      <SearchPresetner
        loading={loading}
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        onSubmitEditing={this.onSubmitEditing}
        handleSearchUpdate={this.handleSearchUpdate}
      />
    );
  }
}
