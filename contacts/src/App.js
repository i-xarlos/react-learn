import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount(){
    const usersAPI = 'https://randomuser.me/api/?results=50&nal=pe;';
    fetch(usersAPI)
      .then(response => response.json())
      .then(data => {
        const contacts = data.results.map(
          user => (
            {},
            user,
            {
              name: `${user.name.first} ${user.name.last}`,
              picture: `${user.picture.thumbnail}`,
            }
          )
        )
        console.log(contacts);
      this.setState({ contacts })
      }).catch(e => console.log(e))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
