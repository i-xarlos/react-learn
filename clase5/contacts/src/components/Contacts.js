import React , { Component } from 'react'
import SearchBox from './SearchBox'
import ContactList from './ContactList'


class Contacts extends Component {
    state = {
        filterText: ''
    }

    handleUserInput = ( searchTerm ) => {
        this.setState({ filterText: searchTerm })
    }

    render(){
        return (
            <div className="contacts">
                <SearchBox
                    filterText={this.state.filterText}
                    onUserInput={this.handleUserInput}
                />
                <ContactList
                    contacts={this.props.contacts}
                    filterText={this.state.filterText}
                />
            </div>
        )
    }
}

export default Contacts