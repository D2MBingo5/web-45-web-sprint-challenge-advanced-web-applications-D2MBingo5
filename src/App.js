import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

import PrivateRoute from "./components/PrivateRoute";
import axiosWithAuth from "./helpers/axiosWithAuth";

function App() {
  const Logout = () => {
    axiosWithAuth()
      .post('/logout')
      .then(res => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        window.location.href = '/login'
      })
      .catch(err => {console.log(err)})
  }

  return (

    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid='loginButton' href='/login'>login</a>
          <a data-testid="logoutButton" href="#" onClick={Logout}>logout</a>
        </header>
        <PrivateRoute exact path='/bubbles' component={BubblePage} />
        <Route path='/login'><Login /></Route>
        <Route exact path='/'><Login /></Route>        
      </div>

    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.