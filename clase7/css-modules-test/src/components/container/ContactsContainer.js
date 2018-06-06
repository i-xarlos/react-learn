import React , { Component } from "react";
import Button from '../presentational/Button'
import Input from '../presentational/Input'

class ContactsContainer extends Component {

    constructor(){
        super();
        this.state = {
            value: ''
        }

        this.handleOnchange = this.handleOnchange.bind(this);
        
    }

    handleOnchange(e){
        this.setState({
                value: e.target.value
            }
        )
    }

    render(){
        return(
            <div>
                <Input 
                    onChange = {this.handleOnchange}
                    value = {this.state.value}
                />
                <Button 
                    name = {this.state.value}
                />
            </div>
        )
    }
}

export default ContactsContainer