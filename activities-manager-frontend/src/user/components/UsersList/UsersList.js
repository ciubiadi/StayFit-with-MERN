import React from 'react'
import './UsersList.css';
import UserItem from '../UserItem/UserItem';
import Card from '../../../shared/components/UIElements/Card/Card';

const UsersList = (props) => {
  if(props.users.length === 0){
    return (<div className='center'>
      <Card>
        <h2>No Users!</h2>
        </Card>
    </div>)
  } else {
    return (
        <ul className='users-list'>
            { props.users.map( user => {
                return <UserItem key={user.id} user={user} />
            }) }
        </ul>
    )
  }
}

export default UsersList;