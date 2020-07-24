import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as requestsAPI from '../../services/requests-api'
import RequestFloorItems from '../../components/RequestFloorItems/RequestFloorItems'
import SearchBar from '../../components/SearchBar/SearchBar'

class RequestFloor extends Component {

  state = {
    requests: []
  }

  handleSearchCities = async (e, city) => {
    e.preventDefault();
    const requests = this.props.requests.filter(request => {
      if (request.cities[0].value.includes(city.value)){
        return request.cities
      }
    })
    this.setState({requests:requests})
  }
  
  handleSearchCategories = async (e, category) => {
    e.preventDefault();
    const requests = this.props.requests.filter(request => {
      if (request.categories[0].value.includes(category.value)){
        return request.categories
      }
    })
    this.setState({requests:requests})
  }

  handleRequestComponent() {
    if (this.state.filteredRequests.length === 0){
      return this.state.filteredRequests
    }
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
          <p className='justify'>This is a place for black and indigenous people to post requests for assistance from non-black people in their communities. in response to these requests, please be mindful and respect the experiences of others.</p> 
          <br></br>
          <Link className="add-service" to="/addrequest">Post a Request</Link>
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