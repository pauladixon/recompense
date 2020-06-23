import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as servicesAPI from '../../services/services-api'
import ServiceFloorItems from '../../components/ServiceFloorItems/ServiceFloorItems'
import SearchBar from '../../components/SearchBar/SearchBar'
import './ServiceFloor.css'

class ServiceFloor extends Component {

  state = {
    services: []
  }

  handleUpdateServices = async () => {
    const services = await servicesAPI.getAll()
    this.setState({services: services})
  }

  handleSearchCategories = async (e) => {
    const services = this.state.services.filter(service => {
      return service.categories.includes(e.target.name)
    })
    this.setState({services:services})
  }

  handleSearchCities = async (e) => {
    const services = this.state.services.filter(service => {
      return service.cities.includes(e.target.name)
    })
    this.setState({services:services})
  }

  render()  {
    return (
      <div className="service-page">
        <div className="page-header">
          <p className='page-title'>Services for BIPOC ::</p> 
          <p>This is a place for non-black people to post free and discounted services / offerings / assistance for black people in their communities. Please be mindful of others in this space and put your heart forward.</p> 
          <br></br>
          <Link className="add-service" to="/addservice">Add a Service</Link>
          <br></br><br></br><br></br>
          <SearchBar
            cities={this.props.cities}
            categories={this.props.categories}
            handleSearchCities={this.handleSearchCities}
            handleSearchCategories={this.handleSearchCategories}
            handleUpdateServices={this.handleUpdateServices}
          />
        </div>
        <div className="page-content"> 
          <ServiceFloorItems
              services={this.props.services}
              cities={this.props.cities}
              categories={this.props.categories}
              handleUpdateServices={this.handleUpdateServices}
          />
        </div>
      </div>
    )
  }
}

export default ServiceFloor