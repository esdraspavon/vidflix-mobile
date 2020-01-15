import React, {useState, useContext} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import API from '../../../utils/api';
import {Context} from '../../../Context';

export default () => {
  const {videos, videosDispatch} = useContext(Context);
  const [text, setText] = useState('');
  const handleSubmit = async () => {
    const movie = await API.searchMovie(text);
    videosDispatch({type: 'SET_SELECTED_MOVIE', payload: {movie: movie[0]}});
  };
  const handleChangeText = value => {
    setText(value);
  };

  return (
    <TextInput
      placeholder="Busca tu pelicula favorita"
      underlineColorAndroid="transparent"
      autoCorrect={false}
      autoCapitalize={'none'}
      onSubmitEditing={handleSubmit}
      onChangeText={handleChangeText}
      style={styles.input}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
});
