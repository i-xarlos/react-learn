import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Buttons from './components/Buttons'
import Heading from './components/Heading'

class App extends Component {
  constructor(){
    super();

    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);

    this.state = {
      counter: 0,
    }
  }

  handleDecrement(){
    this.setState({ counter: this.state.counter - 1})
  }
  handleIncrement(){
    this.setState({ counter: this.state.counter + 1})
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="section">
        <div className="container">
          
          <h1 className="App-title">React state counter: {this.state.counter}</h1>
          <Buttons 
          increment={this.handleIncrement}
          decrement={this.handleDecrement} />
        </div>
      
      </div>
    );
  }
}

export default App;
