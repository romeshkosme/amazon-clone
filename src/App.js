import React, {  useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase'
import { setUser } from './store/user/action'
import { connect } from "react-redux"

function App(props) {

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        props.setUser(authUser)
      } else {
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

// export default App;
export default connect(null, {setUser})(App);
