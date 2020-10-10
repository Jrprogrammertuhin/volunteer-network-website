import React, { createContext, useState } from 'react';

import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Donation from './components/Donation/Donation';
import Events from './components/Events/Events';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h3>email: {loggedInUser.email}</h3>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/donation">
            <Donation></Donation>
          </Route>
          <Route path="/events">
            <Events></Events>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/register">
            <Register></Register>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
