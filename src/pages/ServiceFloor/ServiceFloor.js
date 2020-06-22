import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ServiceFloorItem from '../../components/ServiceFloorItem/ServiceFloorItem'
import SearchBar from '../../components/SearchBar/SearchBar'
import './ServiceFloor.css'

class ServiceFloor extends Component {

  state = {
    services: []
  }

  handleSearch = async (e) => {
    const services = this.state.services.filter(service => {
       return service.categories.includes(e.target.name)
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
            handleSearch={this.handleSearch}
          />
        </div>
        <div className="page-content"> 
          <div className="posts">
              {this.props.services.map(service =>
                <ServiceFloorItem service={service} key={service._id}/>
              )}
          </div> 
        </div>
      </div>
    )
  }
}

export default ServiceFloor