import React from 'react'
import './UsersList.css';
import UserItem from '../UserItem/UserItem';

const UsersList = (props) => {
  if(props.users.length === 0){
    return (<div style={{textAlign: 'center'}}>
        <h2>No Users!</h2>
    </div>)
  } else {
    return (
        <ul>
            { props.users.map( user => {
                return <UserItem style={{textAlgin: 'center'}} key={user.id} user={user} />
            }) }
        </ul>
    )
  }
}

export default UsersList;