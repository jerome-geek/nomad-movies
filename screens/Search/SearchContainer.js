import React from 'react';
import SearchPresetner from './SearchPresenter';

export default class SearchContainer extends React.Component {
  state = {
    loading: false,
    movieResults: null,
    tvResults: null,
    searchTerm: '',
  };

  handleSearchUpdate = text => {
    this.setState({ searchTerm: text });
  };

  onSubmitEditing = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      alert('Searching');
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
