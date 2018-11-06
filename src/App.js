import React, { Component } from 'react';
import Navigation from './Navigation_1/Navigation';
import HeaderPage from './HeaderPage/HeaderPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        <HeaderPage/>
      </React.Fragment>
    ); 
  }
}

export default App;
