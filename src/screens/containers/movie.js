import React, {useContext, useState, useEffect} from 'react';
import MovieLayout from '../components/movie';
import Player from '../../player/containers/player';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import {Context} from '../../../Context';
import Details from '../../videos/components/details';
import {Animated} from 'react-native';

export default () => {
  const {videos, videosDispatch} = useContext(Context);
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, []);
  const closeVideo = () => {
    videosDispatch({type: 'SET_SELECTED_MOVIE', payload: {movie: null}});
  };
  return (
    <Animated.View style={{flex: 1, opacity}}>
      <MovieLayout>
        <Header>
          <Close onPress={closeVideo} />
        </Header>
        <Player />
        <Details {...videos.selectedMovie} />
      </MovieLayout>
    </Animated.View>
  );
};
