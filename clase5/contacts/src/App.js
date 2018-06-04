import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts'

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount(){
    const usersAPI = 'https://randomuser.me/api/?results=100&nat=eu;';
    fetch(usersAPI)
      .then(response => response.json())
      .then(data => {
        const contacts = data.results.map(
          user => ( 
            {} , 
            user ,
            {
              name: `${user.name.first} ${user.name.last}`,
              picture: `${user.picture.large}`,
              email: `${user.email}`
            }
          )
        )
        console.log(contacts);
        this.setState({ contacts })
      }).catch(e => console.log(e))
  }

  render() {
    return (
      <div className="container">
        <Contacts contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;

>>>>>>> .theirs
