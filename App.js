import React, {Component} from 'react';

// import API from './utils/api';
import Context from './Context';
import AppLayout from './src/app';

class App extends Component {
  render() {
    return (
      <Context.Provider>
        {/* <Loading /> */}
        <AppLayout />
      </Context.Provider>
    );
  }
}

export default App;
