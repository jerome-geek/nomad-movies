import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default ({ navigation }) => {
  return (
    <React.Fragment>
      <Text>Movies</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};
