import React, {Component, useContext, useEffect} from 'react';
import API from '../../../utils/api';
import {FlatList, Text, View} from 'react-native';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import Layout from '../components/category-list-layout';
import {Context} from '../../../Context';

export default props => {
  const {videos, videosDispatch} = useContext(Context);
  useEffect(() => {
    API.getMovies().then(CategoryList => {
      videosDispatch({type: 'SET_CATEGORY_LIST', payload: CategoryList});
    });
    // videosDispatch({type: 'SET_CATEGORY_LIST', payload: CategoryList});
  }, []);
  const keyExtractor = item => item.id.toString();
  const renderEmpty = () => <Empty text="No hay sugerencias" />;
  const itemSeparator = () => <Separator />;
  const renderItem = ({item}) => {
    return <Category {...item} />;
  };
  return (
    <Layout>
      <FlatList
        horizontal
        keyExtractor={keyExtractor}
        data={videos.categoryList}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={itemSeparator}
        renderItem={renderItem}
      />
    </Layout>
  );
};
