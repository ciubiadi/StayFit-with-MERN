import './App.css';
import Users from './user/pages/Users';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import ActivityList from './components/ActivityList/ActivityList';
import NewActivity from './components/NewActivity/NewActivity';
import UserActivities from './activities/pages/UserActivities';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';

const ACTIVITIES_LIST = [
  {id: 'a1', name: 'Running'},
  {id: 'a2', name: 'Swimming'},
  {id: 'a3', name: 'Walking'}
];

function App() {

  const [activities, setActivities] = useState(ACTIVITIES_LIST);

  const addNewActivityHandler = (newActivity) => {
    setActivities(prevActivities => [
      ...prevActivities,
      newActivity
    ])
  }

  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact={true}>
            <Users />
          </Route>
          <Route path="/:userId/activities" exact>
            <UserActivities />
          </Route>
          <Route path="/activities/new" exact>
            <NewActivity />
          </Route>
          {/* <Route path="/activities">
            <div className="activities">
              <h2>Course Goals</h2>
              <NewActivity onAddNewActivity={addNewActivityHandler}/>
              <ActivityList activities={activities} />
            </div>
          </Route> */}
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>

  );
}

export default App;
