import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list';
import Loading from './sections/components/loading';
import Movie from './screens/containers/movie';
import {Context} from '../Context';
import Search from './sections/containers/search';

export default () => {
  const {
    videos: {selectedMovie},
  } = useContext(Context);
  return (
    <>
      {selectedMovie ? (
        <Movie />
      ) : (
        <Home>
          <Header />
          <Search />
          <CategoryList />
          <SuggestionList />
        </Home>
      )}
    </>
  );
};
