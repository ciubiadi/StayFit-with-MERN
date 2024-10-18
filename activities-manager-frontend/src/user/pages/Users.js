import React from 'react'
import UsersList from '../components/UsersList/UsersList'

const USERS_DATA = [
    {
        id: 'u1',
        name: 'Adi',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsEJHmI0MlIGvH9CYkbsLEWQ5_ee8Qtl5V-Q&s',
        activities: 3
    },
    {
        id: 'u2',
        name: 'Cristi',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBpnouxDuF063trW5gZOyXtyuQaExCQVMYA&s',
        activities: 1
    },
    {
        id: 'u3',
        name: 'Mih',
        image: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png',
        activities: 2
    },
];

const Users = () => {
  return (
    <UsersList users={USERS_DATA}/>
  )
}

export default Users