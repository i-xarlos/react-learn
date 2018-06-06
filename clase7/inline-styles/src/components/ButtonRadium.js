import React , { Component } from 'react'
import Radium from 'radium'

class ButtonRadium extends Component {
    render() {
        return(
            
            <button style={style}>im a radium button</button>
        )
    }
}

const style = {
    backgroundColor: '#444',
    color: 'white',
    ':hover': {
        color:'red',
    },
    ':active': {
        color:'blue',
    },
    '@media(max-width:480px)': {
        backgroundColor:'#666',
    }
}

export default ButtonRadium