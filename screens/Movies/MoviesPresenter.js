import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';

const MoviesPresenter = ({ loading }) =>
  loading ? (
    <Loader />
  ) : (
    <View>
      <Text>Movies</Text>
    </View>
  );

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default MoviesPresenter;
