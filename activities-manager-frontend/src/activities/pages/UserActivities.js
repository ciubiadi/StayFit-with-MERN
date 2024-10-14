import React from 'react'
import ActivityList from '../components/ActivityList/ActivityList'
import { useParams } from 'react-router-dom/cjs/react-router-dom';

const DUMMY_ACTIVITIES = [
    {
        id: 'a1',
        title: 'Afternoon Running',
        imageURL: '',
        duration: '25',
        distance: '5km',
        type: 'run',
        location: {
            let: 40.7484405,
            lng: -73.9878584
        },
        creatorId: 'u1'
    },
    {
        id: 'a2',
        title: 'Afternoon Walking',
        imageURL: '',
        duration: '60',
        distance: '5km',
        type: 'walk',
        location: {
            let: 40.7484405,
            lng: -73.9878584
        },
        creatorId: 'u1'
    },
    {
        id: 'a3',
        title: 'Morning Swimming',
        imageURL: '',
        duration: '40',
        distance: '2km',
        type: 'swim',
        location: {
            let: 40.7484405,
            lng: -73.9878584
        },
        creatorId: 'u2'
    },
];

const UserActivities = () => {
    const userId = useParams().userId;
    const loadedActivities = DUMMY_ACTIVITIES.filter(activity => activity.creatorId === userId);
    return <ActivityList items={loadedActivities} />
}

export default UserActivities