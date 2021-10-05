

// import Add from './pages/Add';
// import Search from './pages/Search';

import React from 'react';
import Home from './pages/home'
import Navbar from './components/Navbar';

import UserForm from './components/UserForm';
import Login from './pages/Login';
import HealthFacts from './pages/HealthFacts';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/addpatient" component={UserForm}/>
          <Route path="/healthfacts" component={HealthFacts}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
