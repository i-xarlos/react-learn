import React, { Component  } from "react"

const LoaderHOC = (WrappedComponent) => {
    return class extends Component {
        render(){
            return (
                <div>
                    {
                    this.props.contacts.length ? 
                    <WrappedComponent {...this.props} /> :
                    <div className="loader">Loading...</div>
                    }
                </div>
               
            )
        }
    }
}

export default LoaderHOC