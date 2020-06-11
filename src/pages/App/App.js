import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import Home from "../../pages/Home/Home.js";
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: userService.getUser()
    }
  }

  handleLogout = () => {
    userService.logout()
    this.setState({ user: null })
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Link to='' className='title'>:: recompense ::</Link>
          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        </header>
        <body>
          <Switch>
              <Route
                exact path="/"
                render = {(props) => (
                  <Home
                    {...props}
                  />
                )}
              />
              <Route exact path='/signup' render={({ history }) =>
                <SignupPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              } />
              <Route exact path='/login' render={(({ history }) =>
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )} />
            </Switch>
          </body>
      </div>
    );
  }

}

export default App;
