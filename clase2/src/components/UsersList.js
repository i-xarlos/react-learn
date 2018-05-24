import React, { Component } from 'react';
import UserItem from './UserItem';
import PropTypes from './UserItem';

/*
* UserList,  sirve para hacer el mapeo de los usuarios y renderizar cada uno
*/

class  UsersList extends Component {
  render() {
    const { users } = this.props;

    return (
      <div>
        {
          users.map((user, i) => <UserItem key={i} {...user}/>)
        }
      </div>
    )
  }
}

UsersList.propTypes = {
  users: PropTypes.array,
}

export default UsersList;
