import React from 'react'
import { Link } from 'react-router-dom'
import ServiceFloorItem from '../../components/ServiceFloorItem/ServiceFloorItem'
import './ServiceFloor.css'

function ServiceFloor(props) {
  return (
    <div className="page">
        <div className="page-header">
          <p className='page-title'>Services for BIPOC ::</p>  
          <Link className="add-link" to="/addservice">Post a New Service</Link>
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