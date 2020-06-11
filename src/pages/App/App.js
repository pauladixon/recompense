import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
// import NavBar from '../../components/NavBar/NavBar';
import Home from "../../pages/Home/Home.js";

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <header>
          recompense
      </header>
        <Switch>
        {/* <NavBar /> */}
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
              />
            )}
          />

          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}

            />
          } />
          <Route exact path='/login' render={() =>
            <LoginPage

            />
          } />
        </Switch>
      </div>
    );
  }

}

export default App;
