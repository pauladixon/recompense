import React, { PureComponent } from 'react'
import './App.css'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import SignupPage from '../SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Home from "../../pages/Home/Home.js"
import ServiceFloor from '../ServiceFloor/ServiceFloor'
import ServiceDetailPage from '../ServiceDetailPage/ServiceDetailPage'
import RequestDetailPage from '../RequestDetailPage/RequestDetailPage'
import LinkDetailPage from '../LinkDetailPage/LinkDetailPage'
import EditServicePage from '../EditServicePage/EditServicePage'
import EditRequestPage from '../EditRequestPage/EditRequestPage'
import EditLinkPage from '../EditLinkPage/EditLinkPage'
import userService from '../../utils/userService'
import LinkFloor from '../LinkFloor/LinkFloor'
import * as servicesAPI from '../../services/services-api'
import * as linksAPI from '../../services/links-api'
import * as requestsAPI from '../../services/requests-api'
import AddServicePage from '../AddServicePage/AddServicePage'
import AddLinkPage from '../../pages/AddLinkPage/AddLinkPage'
import RequestFloor from '../../pages/RequestFloor/RequestFloor'
import AddRequestPage from '../AddRequestPage/AddRequestPage'
import categories from '../../category-data'
import cities from '../../city-data'

class App extends PureComponent {
  state = {
    user: userService.getUser(),
    services: [],
    serviceComment: '',
    links: [],
    linkComment: [],
    requests: [],
    requestComment: '',
    cities: cities, 
    categories: categories,
  }

  handleLogout = () => {
    userService.logout()
    this.setState({ user: null })
  }

  handleSignupOrLogin = async () => {
   await this.setState({ user: userService.getUser() })
  }

  // services functions //

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

  handleGetAllServices = async () => {
    const services = await servicesAPI.getAll()
    this.setState({services: services})
  }

  // requests functions //

  handleAddRequest = async newRequestData => {
    const newRequest = await requestsAPI.create(newRequestData)
    this.setState(state => ({
      requests: [...state.requests, newRequest]
    }),
      () => this.props.history.push('/requests'))
  }

  handleUpdateRequest = async updatedRequestData => {
    const updatedRequest = await requestsAPI.update(updatedRequestData)
    const newRequestsArray = this.state.requests.map(e =>
      e._id === updatedRequest._id ? updatedRequest : e
    )
    this.setState(
      { requests: newRequestsArray },
      () => this.props.history.push('/requests')
    )
  }

  handleDeleteRequest = async id => {
    await requestsAPI.deleteOne(id)
    this.setState(state => ({
      requests: state.requests.filter(request => request._id !== id)
    }), () => this.props.history.push('/requests'))
  }

  handleGetAllRequests = async () => {
    const requests = await requestsAPI.getAll()
    this.setState({requests: requests})
  }

  // links functions //

  handleAddLink = async newLinkData => {
    const newLink = await linksAPI.create(newLinkData)
    this.setState(state => ({
      links: [...state.links, newLink]
    }),
      () => this.props.history.push('/directaidlinks'))
  }

  handleUpdateLink = async updatedLinkData => {
    const updatedLink = await linksAPI.update(updatedLinkData)
    const newLinksArray = this.state.links.map(e =>
      e._id === updatedLink._id ? updatedLink : e
    )
    this.setState(
      { links: newLinksArray },
      () => this.props.history.push('/directaidlinks')
    )
  }

  handleDeleteLink = async id => {
    await linksAPI.deleteOne(id)
    this.setState(state => ({
      links: state.links.filter(link => link._id !== id)
    }), () => this.props.history.push('/directaidlinks'))
  }

  handleGetAllLinks = async () => {
    const links = await linksAPI.getAll()
    this.setState({links: links})
  }

  handleAddLinkComment = async (e) => {
    e.preventDefault()
    await linksAPI.addComment(e.target.id, this.state.linkComment)
    await this.handleGetAllLinks()
    this.setState({linkComment: ''})
  }

  handleDeleteLinkComment = async(e) => {
    await linksAPI.deleteComment(e.target.id, e.target.name)
    this.handleGetAllLinks()
}
  // helper functions //

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  // lifecycle functions //

  async componentDidMount() {
    const services = await servicesAPI.getAll()
    const requests = await requestsAPI.getAll()
    const links = await linksAPI.getAll()
    this.setState({ requests, services, links })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Link to='' className='title'>recompense</Link>
          <NavBar
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        <div className="container">
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
                  cities={cities}
                  categories={categories}
                  // serviceComment={this.state.serviceComment}
                />
              )}
            />
            <Route
              exact path="/servicedetail"
              render={({ location }) =>
                <ServiceDetailPage
                  location={location}
                  handleDeleteService={this.handleDeleteService}
                  services={this.state.services}
                  cities={cities}
                  categories={categories}
                  serviceComment={this.state.serviceComment}
                  handleGetAllServices={this.handleGetAllServices}
                  user={this.state.user}
                  handleChange={this.handleChange}
                />
              }
            />
            <Route
              exact path="/addservice"
              render={() =>
                userService.getUser() ?
                  <AddServicePage
                    handleAddService={this.handleAddService}
                    cities={cities}
                    categories={categories}
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
                    cities={cities}
                    categories={categories}
                  />
                  :
                  <Redirect to='/login' />
              }
            />
            <Route
              exact path="/directaidlinks"
              render={() => (
                <LinkFloor
                  links={this.state.links}
                  cities={cities}
                  categories={categories}
                  linkComment={this.state.linkComment}
                />
              )}
            />
            <Route
              exact path="/linkdetail"
              render={({ location }) =>
                <LinkDetailPage
                  // location={location}
                  // handleDeleteLink={this.handleDeleteLink}
                  // user={this.state.user}
                  // handleAddLinkComment={this.handleAddLinkComment}
                  location={location}
                  handleDeleteLink={this.handleDeleteLink}
                  link={this.state.link}
                  cities={cities}
                  categories={categories}
                  linkComment={this.state.linkComment}
                  handleAddLinkComment={this.handleAddLinkComment}
                  handleDeleteLinkComment={this.handleDeleteLinkComment}
                  user={this.state.user}
                  handleChange={this.handleChange}
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
              exact path="/editlink"
              render={({ location }) =>
                userService.getUser() ?
                  <EditLinkPage
                    handleUpdateLink={this.handleUpdateLink}
                    location={location}
                    user={this.state.user}
                    // link={this.state.link}
                  />
                  :
                  <Redirect to='/login' />
              }
            />
            <Route
              exact path="/requests"
              render={() => (
                <RequestFloor
                  cities={cities}
                  categories={categories}
                  requests={this.state.requests}
                  requestComment={this.state.requestComment}
                />
              )}
            />
            <Route
              exact path="/requestdetail"
              render={({ location }) =>
                <RequestDetailPage
                  location={location}
                  handleDeleteRequest={this.handleDeleteRequest}
                  requests={this.state.requests}
                  cities={cities}
                  categories={categories}
                  requestComment={this.state.requestComment}
                  // handleAddRequestComment={this.handleAddRequestComment}
                  // handleDeleteRequestComment={this.handleDeleteRequestComment}
                  user={this.state.user}
                  handleChange={this.handleChange}
                />
              }
            />
            <Route
              exact path="/addrequest"
              render={() =>
                userService.getUser() ?
                  <AddRequestPage
                    handleAddRequest={this.handleAddRequest}
                    cities={cities}
                    categories={categories}
                  />
                  :
                  <Redirect to='/login' />
              }
            />
            <Route
              exact path="/editrequest"
              render={({ location }) =>
                userService.getUser() ?
                  <EditRequestPage
                    handleUpdateRequest={this.handleUpdateRequest}
                    location={location}
                    user={this.state.user}
                  />
                  :
                  <Redirect to='/login' />
              }
            />
          </Switch>
        </div>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }

}

export default App;
