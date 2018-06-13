import React , { Component } from "react"

class VideoSearch extends Component {

    state = {
        term: ''
    }

    handleOnChange = (e) => {
        this.setState( { term: e.target.value } )
        this.props.callbackParent(this.state.term);
    }

  

    render(){
        return(
            <div className="field">
                <div className="control">
                    <input 
                    className="input is-primary"
                    type="search"
                    placeholder="Search"
                    value={ this.state.term }
                    onChange={ this.handleOnChange }
                    />
                </div>
            </div>
           
        )
    }
}
export default VideoSearch