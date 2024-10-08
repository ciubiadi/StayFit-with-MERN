import React from 'react'
import './UserItem.css';
import { Link } from 'react-router-dom';


const UserItem = ( { user }) => {
  return (
    <li>
        <div style={{margin: '1em'}}>
            <Link to={`/${user.id}/products`}>
            <div>
                <img src={user.image} alt={`Placeholder for ${user.name}`}/>
            </div>
            <div>
                <h2>{user.name}</h2>
                <h3>{user.places}{user.places === 1 ? ' Product' : ' Products'}</h3>
            </div>
            </Link>
        </div>
    </li>
  )
}

export default UserItem