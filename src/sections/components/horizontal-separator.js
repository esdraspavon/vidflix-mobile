import React from 'react';
import {View} from 'react-native';
export default () => {
  return <View style={styles.separator} />;
};

const styles = {
  separator: {
    flex: 1,
    marginHorizontal: 5,
  },
};
