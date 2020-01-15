import API from '../../../utils/api';
import React, {useEffect, useContext} from 'react';
import {FlatList, Text} from 'react-native';

import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import {Context} from '../../../Context';
import Suggestion from '../components/suggestion';
export default props => {
  const {videos, videosDispatch} = useContext(Context);
  useEffect(() => {
    API.getMovies().then(suggestionList => {
      videosDispatch({type: 'SET_SUGGESTION_LIST', payload: suggestionList});
    });
  }, []);
  const keyExtractor = item => item.id.toString();
  const renderEmpty = () => <Empty text="No hay sugerencias" />;
  const itemSeparator = () => <Separator />;
  const viewMovie = item => {
    videosDispatch({type: 'SET_SELECTED_MOVIE', payload: {movie: item}});
  };
  const renderItem = ({item}) => {
    return (
      <Suggestion
        {...item}
        onPress={() => {
          viewMovie(item);
        }}
      />
    );
  };

  return (
    <Layout title={'Recomendado para ti'}>
      <FlatList
        keyExtractor={keyExtractor}
        data={videos.suggestionList}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={itemSeparator}
        renderItem={renderItem}
      />
    </Layout>
  );
};
