import React from 'react'
import styles from '../presentational/Search.css'

const Search = ( {onChange , value} ) => {
 
    return (
      <input
        className = {styles.Input}
        type = "text"
        onChange = {onChange}
        value = {value}
      />
    )

}

export default Search