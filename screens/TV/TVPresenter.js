import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';

const TvPresenter = ({ loading }) =>
  loading ? (
    <Loader />
  ) : (
    <View>
      <Text>TV</Text>
    </View>
  );

TvPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default TvPresenter;
