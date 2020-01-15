import React, {createContext, useReducer} from 'react';

export const Context = createContext();

const initialVideos = {
  categoryList: [],
  suggestionList: [],
  selectedMovie: null,
};
function videosReducer(state, action) {
  switch (action.type) {
    case 'SET_CATEGORY_LIST': {
      return {...state, categoryList: [...action.payload]};
    }

    case 'SET_SUGGESTION_LIST': {
      return {...state, suggestionList: [...action.payload]};
    }
    case 'SET_SELECTED_MOVIE': {
      return {...state, selectedMovie: action.payload.movie};
    }

    default: {
      return state;
    }
  }
}
const Provider = ({children}) => {
  const [videosState, videosDispatch] = useReducer(videosReducer, {
    ...initialVideos,
  });
  const value = {
    videos: videosState,
    videosDispatch,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
