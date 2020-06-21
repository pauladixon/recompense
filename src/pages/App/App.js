import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import Home from "../../pages/Home/Home.js";
import ServiceFloor from '../ServiceFloor/ServiceFloor';
import ServiceDetailPage from '../ServiceDetailPage/ServiceDetailPage'
import RequestDetailPage from '../RequestDetailPage/RequestDetailPage'
import LinkDetailPage from '../LinkDetailPage/LinkDetailPage'
import EditServicePage from '../EditServicePage/EditServicePage'
import userService from '../../utils/userService';
import LinksPage from '../LinksPage/LinksPage';
import * as servicesAPI from '../../services/services-api'
import * as linksAPI from '../../services/links-api';
import * as requestsAPI from '../../services/requests-api';
import AddServicePage from '../AddServicePage/AddServicePage'
import AddLinkPage from '../../components/AddLinkPage/AddLinkPage';
import RequestPage from '../../pages/RequestPage/RequestPage';
import AddRequest from '../../components/AddRequest/AddRequest';


class App extends Component {
  state = {
    user: userService.getUser(),
    services: [],
    choices: [],
    links: [],
    requests: []
  }

  handleLogout = () => {
    userService.logout()
    this.setState({ user: null })
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  handleAddService = async newServiceData => {
    const newService = await servicesAPI.create(newServiceData)
    this.setState(state => ({
      services: [...state.services, newService]
    }),
      () => this.props.history.push('/servicesfloor'))
  }

  handleUpdateService = async updatedServiceData => {
    const updatedService = await servicesAPI.update(updatedServiceData)
    const newServicesArray = this.state.services.map(e =>
      e._id === updatedService._id ? updatedService : e
    )
    this.setState(
      { services: newServicesArray },
      () => this.props.history.push('/servicesfloor')
    )
  }

  handleDeleteService = async id => {
    await servicesAPI.deleteOne(id)
    this.setState(state => ({
      services: state.services.filter(service => service._id !== id)
    }), () => this.props.history.push('/servicesfloor'))
  }

  handleAddLink = async newLinkData => {
    const newLink = await linksAPI.create(newLinkData)
    this.setState(state => ({
      links: [...state.links, newLink]
    }),
      () => this.props.history.push('/directaidlinks'))
  }

  handleAddRequest = async newRequestData => {
    const newRequest = await requestsAPI.create(newRequestData)
    this.setState(state => ({
      requests: [...state.requests, newRequest]
    }),
      () => this.props.history.push('/requests'))
  }

  async componentDidMount() {
    const services = await servicesAPI.getAll()
    this.setState({ services })
    const requests = await requestsAPI.getAll()
    this.setState({ requests })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Link to='' className='title'>r e c o m p e n s e</Link>
          <NavBar
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        <div className="">
          <Switch>
            <Route
              exact path="/"
              render={(props) => (
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
            <Route
              exact path="/servicesfloor"
              render={() => (
                <ServiceFloor
                  services={this.state.services}
                />
              )}
            />
            <Route
              exact path="/servicedetail"
              render={({ location }) =>
                <ServiceDetailPage
                  location={location}
                  handleDeleteService={this.handleDeleteService}
                  user={this.state.user}
                />
              }
            />
            <Route
              exact path="/addservice"
              render={() =>
                userService.getUser() ?
                  <AddServicePage
                    handleAddService={this.handleAddService}
                    city={this.state.user.city}
                  />
                  :
                  <Redirect to='/login' />
              }
            />
            <Route
              exact path="/editservice"
              render={({ location }) =>
                userService.getUser() ?
                  <EditServicePage
                    handleUpdateService={this.handleUpdateService}
                    location={location}
                    user={this.state.user}
                  />
                  :
                  <Redirect to='/login' />
              }
            />
            <Route
              exact path="/directaidlinks"
              render={() => (
                <LinksPage
                  links={this.state.links}
                />
              )}
            />
            <Route
              exact path="/linkdetail"
              render={({ location }) =>
                <LinkDetailPage
                  location={location}
                  // handleDeleteLink={this.handleDeleteLink}
                  user={this.state.user}
                />
              }
            />
            <Route
              exact path="/addlink"
              render={() =>
                userService.getUser() ?
                  <AddLinkPage
                    handleAddLink={this.handleAddLink}
                    city={this.state.user.city}
                  />
                  :
                  <Redirect to='/login' />
              }
            />
            <Route
              exact path="/requests"
              render={() => (
                <RequestPage
                  requests={this.state.requests}
                />
              )}
            />
            <Route
              exact path="/addrequest"
              render={() =>
                userService.getUser() ?
                  <AddRequest
                    handleAddRequest={this.handleAddRequest}
                    city={this.state.user.city}
                  />
                  :
                  <Redirect to='/login' />
              }
            />
            <Route
              exact path="/requestdetail"
              render={({ location }) =>
                <RequestDetailPage
                  location={location}
                  handleDeleteRequest={this.handleDeleteRequest}
                  user={this.state.user}
                />
              }
            />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;
