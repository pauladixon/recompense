import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as servicesAPI from '../../services/services-api'
import ServiceFloorItems from '../../components/ServiceFloorItems/ServiceFloorItems'
import SearchBar from '../../components/SearchBar/SearchBar'
import './ServiceFloor.css'

class ServiceFloor extends Component {

  state = {
    services: [],
    filteredServices: []
  }

  handleSearchCities = async (e) => {
    e.preventDefault()
    const services = this.props.services.filter(service => {
      if (service.cities[0].value.includes(e.target.name)) {
        return service.cities
      }
    })
    this.setState({filteredServices:services})
  }
  
  handleSearchCategories = async (e) => {
    e.preventDefault()
    const services = this.props.services.filter(service => {
      if (service.categories[0].value.includes(e.target.name)) {
        return service.categories
      }
    })
    this.setState({filteredServices:services})
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

  async componentDidMount() {
    const services = await servicesAPI.getAll()
    this.setState({services})
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
              services={this.state.services}
              cities={this.props.cities}
              categories={this.props.categories}
          />
        </div>
      </div>
    )
  }
}

export default ServiceFloor