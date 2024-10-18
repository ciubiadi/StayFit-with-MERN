import React from 'react';
import Card from '../../../shared/components/UIElements/Card/Card';
import './ActivityList.css';
import ActivityItem from '../ActivityItem/ActivityItem';

const ActivityList = props => {
  console.log('activitylist props: ', props);
  if (props.items.length === 0) {
    return (
      <div className="activity-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Activity</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="activity-list">
      {props.items.map(activity => (
        <ActivityItem
          key={activity.id}
          id={activity.id}
          imageURL={activity.imageURL}
          title={activity.title}
          type={activity.type}
          distance={activity.distance}
          duration={activity.duration}
          creatorId={activity.creatorId}
          coordinates={activity.location}
        />
      ))}
    </ul>
  );
};

export default ActivityList;