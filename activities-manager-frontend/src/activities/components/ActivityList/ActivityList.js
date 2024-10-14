import React from 'react'
import './ActivityList.css';
import ActivityItem from '../ActivityItem/ActivityItem';

const ActivityList = (props) => {
  if(props.items.length === 0) {
    return (<div>
        <div>
          <h2>No activities found. Time to train!</h2>
          <button>Share Activity</button>
        </div>
      </div>);
  }
  
  return <ul>
    {props.items.map(activity => 
      <ActivityItem 
        key={activity.id} 
        id={activity.id} 
        image={activity.imageURL} 
        title={activity.title} 
        description={activity.description} 
        type={activity.type}
        creatorId={activity.creatorId}
        coordinates={activity.location}
      />
    )}
  </ul>
}

export default ActivityList