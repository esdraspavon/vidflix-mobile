import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
export default props => {
  return (
    <View
      style={[styles.container, props.fullscreen && styles.fullscreenStyle]}>
      {/* {!props.fullscreen && (
        <Text
          style={{
            position: 'absolute',
            top: 0,
            color: 'white',
            fontSize: 20,
            elevation: 3,
          }}>
          Hola!
        </Text>
      )} */}
      <View style={styles.video}>{props.children}</View>
      <View style={styles.overlay}>{props.loading && props.loader}</View>
      {props.controls}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%',
  },
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#000',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 2,
  },
});
