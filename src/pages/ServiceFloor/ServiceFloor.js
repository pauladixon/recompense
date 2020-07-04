import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as servicesAPI from '../../services/services-api'
import ServiceFloorItems from '../../components/ServiceFloorItems/ServiceFloorItems'
import SearchBar from '../../components/SearchBar/SearchBar'
import './ServiceFloor.css'

class ServiceFloor extends Component {
  state = {
    filteredServices: []
  }

  handleSearchCities = (e) => {
    const services = this.props.services.filter(service => {
      // console.log(service.cities[0].value.includes(service.cities[0].value))
      if (service.cities[0].value.includes(e.target.name)) {
        return service.cities
        // console.log(service.cities)
      }
      // return service.cities[0].value.includes(e.target.value)
    })
    // console.log(e.target.name);
    // console.log(this.props.services)
    this.setState({filteredServices:services})
  }
  
  handleSearchCategories = (e) => {
    const services = this.props.services.filter(service => {
      return service.categories[0].value.includes(e.target.name)
    })
    this.setState({services:services})
  }

  componentDidUpdate() {
    console.log('updated', this.props.services)
    console.log('updated', this.state.filteredServices)
  }

  handleServiceComponent() {
    if (this.state.filteredServices.length === 0) {
      return this.props.services
    } else {
      return this.state.filteredServices
    }
  }

  render()  {
    return (
      <div className="service-page">
        <div className="page-header">
          <p className='page-title'>Services for BIPOC ::</p> 
          <p>This is a place for non-black people to post free and discounted services / offerings / assistance for black and indigenous people in their communities. Please be mindful of others in this space and put your heart forward.</p> 
          <br></br>
          <Link className="add-service" to="/addservice">Post a Service</Link>
          <br></br><br></br><br></br>
          <SearchBar
            cities={this.props.cities}
            categories={this.props.categories}
            handleSearchCities={this.handleSearchCities}
            handleSearchCategories={this.handleSearchCategories}
          />
        </div>
        <div className="page-content"> 
          <ServiceFloorItems
              services={this.props.services}
              cities={this.props.cities}
              categories={this.props.categories}
          />
        </div>
      </div>
    )
  }
}

export default ServiceFloor