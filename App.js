import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import API from './utils/api';
import Player from './src/player/containers/player';
import Context from './Context';
import Loading from './src/sections/components/loading';

class App extends Component {
  state = {};
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    // this.setState({
    //   suggestionList: movies,
    //   categoryList: categories,
    // });
  }
  render() {
    return (
      <Context.Provider>
        <Loading />
        <Home>
          <Header />
          <Player />
          <Text>Buscador</Text>
          <Text>Categorias</Text>
          <CategoryList />
          <SuggestionList />
        </Home>
      </Context.Provider>
    );
  }
}

export default App;
