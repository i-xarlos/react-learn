import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleClick = (event) => {

     console.log('target', event.target);
     console.log('currentTarget' , event.currentTarget);
     console.log('type', event.type);
     console.log('instanceof MouseEvent', event instanceof MouseEvent);
     console.log('event.nativeEvent instanceof MouseEvent', event.nativeEvent instanceof MouseEvent);

     event.preventDefault();
  }

  onHandle = (event) => {
    
    switch(event.type){

        case 'click':
        console.log('onClick');
        break;

        case 'mouseenter':
        console.log('onMouseEnter');
        break;

        case 'dbclick':
        console.log('dbclick');
        break;
      }
  }

  inputFocus = (event) => {
    console.log(this.element);
    this.inputRef.focus();
    this.inputRef.style.border = '1px solid red';
    
   
    let text1 = "hola";
    let text = "Tu texto ha cambiado";

    console.log(text, event.target.innerText);
    
    this.bt.innerText = this.bt.innerText === text1 ? text : text1;

    event.preventDefault();
  }

  toogleName = () => {
    return 
  }

  render() {
    return (
      <div className="App">
        <form onClick = { this.handleClick }>
          <div>
            <button>Click 1</button>
            <button>Click 2</button>
            <button 
              onClick = { this.onHandle }
              onDoubleClick = { this.onHandle }
              onMouseEnter = { this.onHandle }
            >
            Click me
            </button>
          </div>
        </form>

        <form>
          <input 
            type="text"
            ref = { element => this.inputRef = element }
          />
          
          <button 
            type = "text"
            ref = { btn => this.bt = btn } 
            onClick = { this.inputFocus }>
            Click 1
          </button>

          
        </form>
      </div>
    );
  }
}

export default App;
