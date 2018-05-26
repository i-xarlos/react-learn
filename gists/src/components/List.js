import React, { Component } from 'react'
import ListItem from './ListItem';

class List extends Component {
    render() {
        const { data } = this.props;
        return (
            <ul>
                {data.map(gist => <p>{gist.description}</p>)}
            </ul>
        )

    }
}

export default List