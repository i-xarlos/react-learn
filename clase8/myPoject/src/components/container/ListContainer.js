import React, { Component } from 'react'
import ListItem from '../presentational/ListItem'
import PropTypes from '../presentational/ListItem'
import Search from '../presentational/Search';
import Button from '../presentational/Button';

class ListContainer extends Component {
    render() {
      
      const { list } = this.props;
  
      return (
        <div className="column">
            <Search />
            <ul>
            {
                list.map((item, i) => <ListItem key={i} {...item}/>)
            }
            </ul>
            <Button />
        </div>
      )
    }
  }
  
  ListContainer.propTypes = {
    list: PropTypes.array,
  }
  
  export default ListContainer;