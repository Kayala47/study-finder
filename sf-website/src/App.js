import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Login from './components/LoginForm/Login';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';

function App() {

  const registered = true;

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container d-flex align-items-center flex-column">


          {/* {registered ? <Login /> : <RegistrationForm />} */}
          <Link to="/register"> Register </Link>
          {/* <RegistrationForm /> */}

          <Router>
            <Switch>
              <Route path="/register">
                <RegistrationForm />
              </Route>

              <Route exact path="/">
                <Login />
              </Route>

            </Switch>
          </Router>

        </div>
      </div>
    </Router>
  )
}

export default App;
