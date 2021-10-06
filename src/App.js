

// import Add from './pages/Add';
// import Search from './pages/Search';

import React from 'react';
import Home from './pages/home';
import Navbar from './Components/Navbar';
import UserForm from './Components/UserForm';
import Footer from './Components/Footer';
import Login from './pages/Login';
import HealthFacts from './pages/HealthFacts';
import PinBoard from './pages/PinBoard';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/addpatient" component={UserForm}/>
          <Route path="/healthfacts" component={HealthFacts}/>
          <Route path="/pin" component={PinBoard}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
