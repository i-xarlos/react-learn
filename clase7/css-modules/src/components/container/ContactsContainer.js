import React, { Component } from 'react'
import Input from '../presentational/Input'
import Button from '../presentational/Button';

class ContactsContainer extends Component {
    
    constructor(){
        super();

        this.state = {
            value: '',
        }

        this.handleOnChange = this.handleOnChange.bind(this);

    }

    handleOnChange(e) {
        this.setState({ value: e.target.value })
      }

    render(){
        return(
            <div>
                Hola mundo de nuevo de nuevo
                 <Input 
                  onChange={this.handleOnChange} 
                  value={this.state.value}
                 />
                 <Button name={this.state.value} />
            </div>
           
        )
    }
}

export default ContactsContainer