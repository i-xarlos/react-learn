import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './components/UsersList';
import GeolocationContainer from './components/GeolocationContainer';

class App extends Component {
  constructor() {
   super();
   this.state = {
     users: [],
     isLoading: true,
   }
 }

  componentDidMount(){
    const usersApi = 'https://jsonplaceholder.typicode.com/users'
    fetch(usersApi)
    .then(response => response.json())
    .then(users => {
        console.log(users);
        this.setState({
          users,
          isLoading: false,
        })
      }).catch(error => {
        console.log(error);
      });
  }


  render() {
    const { users , isLoading } = this.state;
    const spin =   <i className="fas fa-spinner fa-pulse"/>;

    return (
      <div className="section">
        <div className="container">
          <GeolocationContainer />
          { isLoading ? spin : <UsersList users={users}/> }
        </div>
      </div>
    );
  }
}

export default App;
