import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as requestsAPI from '../../services/requests-api'
import RequestFloorItems from '../../components/RequestFloorItems/RequestFloorItems'
import SearchBar from '../../components/SearchBar/SearchBar'
import './RequestFloor.css'

class RequestFloor extends Component {

  state = {
    requests: []
  }

  handleSearchCities = async (e) => {
    const requests = this.state.requests.filter(request => {
      return request.cities.value.includes(e.target.name)
    })
    this.setState({requests:requests})
  }
  
  handleSearchCategories = async (e) => {
    const requests = this.state.requests.filter(request => {
      return request.categories.value.includes(e.target.name)
    })
    this.setState({requests:requests})
  }

  async componentDidMount() {
    const requests = await requestsAPI.getAll()
    this.setState({requests})
  }

  render()  {
    return (
      <div className="service-page">
        <div className="page-header">
          <p className='page-title'>Requests by BIPOC ::</p>
          <p>This is a place for black and indigenous people to post requests for free / discounted assistance from their communities. Please be mindful in this space and respect the experiences of others.</p> 
          <br></br><br></br>
          <Link className="add-service" to="/addrequest">Post A Request</Link>
          <br></br><br></br><br></br>
          <SearchBar
            cities={this.props.cities}
            categories={this.props.categories}
            handleSearchCities={this.handleSearchCities}
            handleSearchCategories={this.handleSearchCategories}
          />
        </div>
        <div className="page-content">
          <RequestFloorItems
              requests={this.state.requests}
              cities={this.props.cities}
              categories={this.props.categories}
          />
        </div>
      </div>
    )
  }
}
export default RequestFloor