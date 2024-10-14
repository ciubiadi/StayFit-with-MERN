import './ActivityList.css';
import ActivityItem from '../ActivityItem/ActivityItem'

const ActivityList = ({ activities }) => { 
    return (
        <ul className="activity-list">
            { activities.map(activity => <ActivityItem activity={activity.name} key={activity.id} />)}
        </ul>
    );
}

export default ActivityList;