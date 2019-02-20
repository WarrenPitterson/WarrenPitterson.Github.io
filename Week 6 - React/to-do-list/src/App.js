import React, { Component } from 'react';
import './App.css';
import List from './list';
import Header from './header';

class App extends Component {
  state = {
    list: []
  }




  render() {
    return (
      <div className="App">
        <List/>
        <Header/>
      </div>
    );
  }
}





export default App;
