import React from 'react'

const SearchBox = ({  filterText , onUserInput }) => (
    <input 
        type="search"
        placeholder="Search"
        value={filterText}
        onChange={event => onUserInput(event.target.value)}
    />
);

export default SearchBox