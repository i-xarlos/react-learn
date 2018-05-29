import React, { Component } from 'react';
import List from './components/List';


class App extends Component {
  constructor(){
    super();

    this.state = {
      data: [],
    }
  }

  componentDidMount(){
    const gistsApi = 'https://api.github.com/users/gaearon/gists'
    fetch(gistsApi)
    .then(response => response.json())
    .then(
      data => {
        console.log(data);
        this.setState({data});
      }
     
    )
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const { data } = this.state;
    //console.log(data);
    return (
      <div className="container">
        <List data={ data } />
      </div>
    );
  }
}

export default App;
