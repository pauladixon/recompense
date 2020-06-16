import React from 'react'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import { Link } from 'react-router-dom'
import './ServiceDetailPage.css'

function ServiceDetailPage (props) {
    const service = props.location.state.service
    return (
        <>
            <div>
            <h4>Service Details:</h4>
            </div>
            <div>
            <ServiceCard
                key={service._id}
                service={service}
                user={props.user}
                handleDeleteService={props.handleDeleteService}
                />
                </div>
            <hr></hr>
              <Link to='/servicesfloor'>Return to Services Floor</Link>  
        </>
    )
}

export default ServiceDetailPage