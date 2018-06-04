import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div>
          <Contact />
        </div>
      </div>
     
    );
  }
}

export default App;
