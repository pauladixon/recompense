import React from 'react'
import { Link } from 'react-router-dom'
import ServiceFloorItem from '../../components/ServiceFloorItem/ServiceFloorItem'
import './ServiceFloor.css'

function ServiceFloor(props) {
  return (
    <div className="service-page">
        <div className="page-header">
          <p>Services:</p>  
          <Link className="add-service" to="/addservice">Post A Service</Link>
        </div>
        <div className="page-content"> 
          <div className="posts">
              {props.services.map(service =>
                <ServiceFloorItem service={service} key={service._id}/>
              )}
          </div> 
        </div>
    </div>
  )
}

export default ServiceFloor