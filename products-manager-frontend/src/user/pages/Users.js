import React from 'react'
import UsersList from '../components/UsersList/UsersList'

const USERS_DATA = [
    {
        id: 'u1',
        name: 'Adi',
        image: 'testURL',
        places: 3
    },
    {
        id: 'u2',
        name: 'Cristi',
        image: 'testURL',
        places: 1
    },
    {
        id: 'u3',
        name: 'Miha',
        image: 'testURL',
        places: 2
    },
];

const Users = () => {
  return (
    <UsersList users={USERS_DATA}/>
  )
}

export default Users