import React from 'react'
import styles from '../presentational/Button.css'


const Button = ({ name }) => {
   

    return(
        <button className = { syles.Button }>
            { name }
        </button>
    )
}

export default Button