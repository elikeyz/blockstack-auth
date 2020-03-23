import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { ProfileContext } from './contexts/profile-context';
import { UserSession } from 'blockstack';

function App() {
  const [profile, changeProfile] = useState({});

  const setProfile = () => {
    const userSession = new UserSession()
    if (userSession.isUserSignedIn() && Object.keys(profile).length < 1) {
      const userData = userSession.loadUserData();
      changeProfile(userData);
    } else if (userSession.isSignInPending() && Object.keys(profile).length < 1) {
      userSession.handlePendingSignIn()
        .then((userData) => {
          changeProfile(userData);
        });
    }
  };

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </ProfileContext.Provider>
  );
}

export default App;
