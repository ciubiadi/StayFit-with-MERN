import './App.css';
import Users from './user/pages/Users';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import UserActivities from './activities/pages/UserActivities';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';
import NewActivity from './activities/pages/NewActivity';
import StravaInfo from './activities/pages/StravaInfo';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact={true}>
            <Users />
          </Route>
          <Route path="/strava-activities" exact>
            <StravaInfo />
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
