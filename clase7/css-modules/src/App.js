import React, { Component } from 'react'
import ContactsContainer from './components/container/ContactsContainer';

class App extends Component {
    render(){
        return(
            <div className="container"> 
                <ContactsContainer />
            </div>
        )
    }
}

export default App