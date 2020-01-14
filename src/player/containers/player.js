import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  StatusBar,
} from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import Fullscreen from '../components/fullscreen';
import Orientation from 'react-native-orientation-locker';

export default () => {
  let player;
  const [loading, setLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  useEffect(() => {
    // This would be inside componentDidMount()
    Orientation.addDeviceOrientationListener(handleOrientation);

    return () => {
      // This would be inside componentWillUnmount()
      Orientation.removeOrientationListener(handleOrientation);
    };
  }, []);
  const onBuffer = ({isBuffering}) => {
    setLoading(isBuffering);
  };
  const playpause = () => {
    setPaused(!paused);
  };
  const onProgress = ({currentTime: ct, seekableDuration: sd}) => {
    let currTime = ct / 60;
    let minutes = Math.floor(currTime); //tiempo transcurrido en minutos sin decimales
    let seconds = currTime % 1;
    seconds = (seconds * 60) / 1000;
    let time = (minutes + seconds * 10).toFixed(2); //toFixed(2) 2 decimales
    setCurrentTime(time);
    setProgress((currTime / sd) * 6000);
  };
  const onLoad = ({duration: d}) => {
    setLoading(false);
    setDuration(d);
  };
  const handleOrientation = orientation => {
    handleFullscreen(orientation);
    orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT'
      ? (setFullscreen(true), StatusBar.setHidden(true))
      : (setFullscreen(false), StatusBar.setHidden(false));
  };
  const handleFullscreen = () => {
    fullscreen
      ? (setFullscreen(false), StatusBar.setHidden(false))
      : (setFullscreen(true), StatusBar.setHidden(true));
  };

  return (
    <Layout
      loading={loading}
      loader={<ActivityIndicator />}
      fullscreen={fullscreen}
      controls={
        <ControlLayout>
          <PlayPause onPress={playpause} paused={paused} />
          <View style={styles.progressbar}>
            <View
              style={{
                ...styles.progressbarCircle,
                left: `${progress}%`,
              }}
            />
          </View>
          <Text>
            {currentTime} / {duration}
          </Text>
          <Fullscreen onPress={handleFullscreen} />
        </ControlLayout>
      }>
      <Video
        source={{
          uri:
            'https://static.videezy.com/system/resources/previews/000/018/948/original/ICON-VERSION8_1.mp4',
        }}
        ref={elem => {
          player = elem;
        }}
        style={styles.video}
        resizeMode="contain"
        onBuffer={onBuffer}
        onLoad={onLoad}
        paused={paused}
        onProgress={onProgress}
      />
    </Layout>
  );
};
const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  progressbar: {
    flex: 1,
    height: 4,
    backgroundColor: 'red',
    marginRight: 7,
    borderRadius: 3,
    justifyContent: 'center',
  },
  progressbarCircle: {
    position: 'absolute',
    height: 15,
    width: 15,
    borderRadius: 50,
    backgroundColor: 'white',
    transform: [{translateX: -7}],
  },
});
