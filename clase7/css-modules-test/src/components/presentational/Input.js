import React from "react"

const Input = ({ onChange , value }) => {
    
        return(
            <input
                type = "text"
                name = "search"
                onChange = { onChange }
                value = { value }
            />
              
        )
}

export default Input