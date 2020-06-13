import React from 'react'
import { Link } from 'react-router-dom'
import './ServiceFloorItem.css'

function ServiceFloorItem({ service }) {
    return (
        <>
            <div className='serviceflooritem'>
                <p>service name: {service.name}</p>
                <p>city: {service.city}</p>
                <p>exchange: {service.exchange}</p>
                <p>posted by: {service.creator}</p>
                <div className='serviceflooritem-detail-link'>
                    <Link 
                        to={{
                            pathname: '/servicedetail',
                            state: { service }
                        }}
                    > details
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ServiceFloorItem