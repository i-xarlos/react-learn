import React, { Component } from 'react'
import ListContainer from './components/container/ListContainer'
import DetailContainer from './components/container/DetailContainer'

class App extends Component {
    render(){
        return(
            <div className="container"> 
                <div className="columns">
                    <ListContainer />
                    <DetailContainer/>
                </div>
              
            </div>
        )
    }
}

export default App