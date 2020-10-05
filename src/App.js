import React from 'react';

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
import Check from './components/Test/Check';

function App() {
  return (
    <Router>
      <Header></Header>
      <Check></Check>
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
      </Switch>
    </Router>
  );
}

export default App;
