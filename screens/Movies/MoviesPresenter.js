import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';

const MoviesPresenter = ({ loading, upcoming, popular, nowPlaying }) =>
  loading ? (
    <Loader />
  ) : (
    <View>
      <Text>Movies</Text>
    </View>
  );

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nowPlaying: PropTypes.array,
};

export default MoviesPresenter;
