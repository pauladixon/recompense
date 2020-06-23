import React, { Component } from 'react'
import './ServiceFloorItems.css'
import ServiceFloorItem from '../../components/ServiceFloorItem/ServiceFloorItem'

class ServiceFloorItems extends Component {

    state = {
        services: []
    }

    render() {
        return (
            <>
              <div className="posts">
                  {this.props.services.map(service =>
                    <ServiceFloorItem 
                      service={service} 
                      key={service._id}
                    />
                  )}
              </div> 
            </>
        )
    }
}

export default ServiceFloorItems