import React from 'react'
import UsersList from '../components/UsersList/UsersList'

const USERS_DATA = [
    {
        id: 'u1',
        name: 'Adi',
        image: 'testURL',
        activities: 3
    },
    {
        id: 'u2',
        name: 'Cristi',
        image: 'testURL',
        activities: 1
    },
    {
        id: 'u2',
        name: 'Mih',
        image: 'testURL',
        activities: 2
    },
];

const Users = () => {
  return (
    <UsersList users={USERS_DATA}/>
  )
}

export default Users