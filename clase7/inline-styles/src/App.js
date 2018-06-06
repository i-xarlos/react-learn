import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonRadium from './components/ButtonRadium'
import { StyleRoot } from 'radium'

class App extends Component {
  state = {
      
    fontSize: 10,
   
  }



  handleOnChange = (e) => {
    this.setState ({
      fontSize:  Number(e.target.value)
    })
  }

  render() {
    
    

  
    return (
      <StyleRoot>
      <div className="container">

      <ButtonRadium />
          <input
            type="text"
            style={{ fontSize: Number(this.state.fontSize) }}
            onChange={ this.handleOnChange }
          >
          
          </input>
         
      </div>
      </StyleRoot>
    );
  }
}

export default App;
