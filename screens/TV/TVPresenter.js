import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';

const TvPresenter = ({ loading, popular, topRated, airingToday }) =>
  loading ? (
    <Loader />
  ) : (
    <View>
      <Text>TV</Text>
    </View>
  );

TvPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingToday: PropTypes.array,
};

export default TvPresenter;
