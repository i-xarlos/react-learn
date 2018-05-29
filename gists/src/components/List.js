import React, { Component } from 'react'
import ListItem from './ListItem';

class List extends Component {
    render() {
        const { data } = this.props;
        return (
            <ul> 
                {
                data.map((elem,i) => <ListItem key={i} {...elem}/>)
                }
            </ul>
        )

    }
}

export default List


