import React, { Component } from 'react';
import { connect } from 'react-redux';

const User = ({user}) => {
  return (
    <li>
      {user.userName}
    </li>
  )
}

export class Users extends Component {

  render() {

    const users = this.props.users.map((user, index) => <User user={user} key={index}/>)

    return (
      <div>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users, primaryUser: state.users[0]}
}

// export const ConnectedUsers = Users // aren't we supposed to be connecting something around here?
export const ConnectedUsers = connect(mapStateToProps)(Users); // aren't we supposed to be connecting something around here?
