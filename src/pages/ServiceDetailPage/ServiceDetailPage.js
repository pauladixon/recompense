import React from 'react'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import { Link } from 'react-router-dom'
import './ServiceDetailPage.css'

function ServiceDetailPage (props) {
    const service = props.location.state.service
    return (
        <div className='detail-page'>
            <ServiceCard
                key={service._id}
                service={service}
                user={props.user}
                handleDeleteService={props.handleDeleteService}
            />
            <Link 
                className='home-link'
                to='/servicesfloor'
            >
                Return to Services Floor</Link>
        </div>
    )
}

export default ServiceDetailPage