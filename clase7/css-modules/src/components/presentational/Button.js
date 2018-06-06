import React from 'react'
import styles from '../presentational/Button.css'

const Button = ({ name }) => {
   console.log(name);

    const newStyle = name === 'area51' ? styles.Button : styles.ButtonFail;
    console.log(styles);

    return(
        <button className = { newStyle }>
            Click me
        </button>
    )
}

export default Button