import React from 'react'
import ActivityList from '../components/ActivityList/ActivityList'
import { useParams } from 'react-router-dom/cjs/react-router-dom';

const DUMMY_ACTIVITIES = [
    {
        id: 'a1',
        title: 'Afternoon Running',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8Wk_A8o2qkSx5dOyTyGt3AxzbNx5R1pbRQ&s',
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
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9NEP1RclbWvqpRGUluFjYTqGQND1I6SAPoQ&s',
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
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXysHGw_HDXHerviDzBgoR9E_dtLN7w4n3g&s',
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
    console.log('userId: ', userId);
    const loadedActivities = DUMMY_ACTIVITIES.filter(activity => activity.creatorId === userId);
    console.log('loadedActivities: ', loadedActivities);
    return <ActivityList items={loadedActivities} />
}

export default UserActivities