import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Home from './Components/Home.js';
import {Route} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>
        <Route path="" component={Header} />
        <Route path="/" exact component={Home} />
        <Route path="" component={Footer} />
      </div>
    );
  }
}

export default App;
