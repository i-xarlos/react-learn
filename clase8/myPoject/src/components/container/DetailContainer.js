import React , { Component } from 'react'
import Detail from '../presentational/Detail';


class DetailContainer extends Component {

    constructor(){
      super();

      this.state = {
        name : null , 
        email : null, 
        username : null, 
        address : null, 
        company : null
      }
  
      this.getData = this.getData.bind(this);
    }
  
    componentDidMount(){
     
    }
  
    getData({ data }){
      this.setState({
        name : data.name , 
        email : data.email, 
        username : data.username, 
        address : data.address, 
        company : data.company
      })
    }
  
    render(){
  
      return (
        <div className="column">
            <Detail {...this.state} />
        </div>
       
      )
    }
  }
  
  export default DetailContainer