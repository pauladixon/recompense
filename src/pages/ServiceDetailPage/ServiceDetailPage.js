import React from 'react'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import { Link } from 'react-router-dom'
import './ServiceDetailPage.css'

function ServiceDetailPage (props) {
    const service = props.location.state.service
    return (
        <>
            <div className="detail-header">
            <h4>Service Details:</h4>
            </div>
            <div className="detail-page">
            <ServiceCard
                className="service-card"
                key={service._id}
                service={service}
                user={props.user}
                handleDeleteService={props.handleDeleteService}
                />
                </div>
            <hr></hr>
              <Link className="return-link" to='/servicesfloor'>Return to Services Floor</Link>  
        </>
    )
}

export default ServiceDetailPage