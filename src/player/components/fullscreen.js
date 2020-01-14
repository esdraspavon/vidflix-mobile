import React from 'react';
import {
  View,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

export default props => {
  return (
    <TouchableHighlight
      underlayColor="red"
      onPress={props.onPress}
      style={styles.container}
      hitSlop={{
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
      }}>
      <Text style={styles.button}>Full</Text>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray',
  },
});
