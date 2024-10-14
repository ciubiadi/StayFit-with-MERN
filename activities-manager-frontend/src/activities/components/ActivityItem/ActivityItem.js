import React from 'react'
import './ActivityItem.css';

const ActivityItem = (props) => {
  return (
    <li>
        <div>
            <img src={props.image} alt={props.title} />
        </div>
        <div>
            <h2>{props.title}</h2>
            <h3>{props.type}</h3>
            <p>{props.description}</p>
        </div>
        <div>
            <button>VIEW ON MAP</button>
            <button to={`/activities/${props.id}`}>EDIT</button>
            <button>DELETE</button>
        </div>
    </li>
  )
}

export default ActivityItem