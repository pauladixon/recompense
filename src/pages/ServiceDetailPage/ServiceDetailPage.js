import React from 'react'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import { Link } from 'react-router-dom'

function ServiceDetailPage (props) {
    const service = props.location.state.service
    return (
        <>
            <h1>Service Details</h1>
            <ServiceCard
                key={service._id}
                service={service}
                user={props.user}
                handleDeleteService={props.handleDeleteService}
            />
            <Link to='/servicesfloor'>Return to Services Floor</Link>
        </>
    )
}

export default ServiceDetailPage