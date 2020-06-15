import React from 'react'
import { Link } from 'react-router-dom'
import './ServiceFloorItem.css'

function ServiceFloorItem({ service }) {
    return (
        <>
            <div className='serviceflooritem'>
                <div>
                    <p>{service.name}</p>
                    <p>{service.city}</p>
                    <p>{service.exchange}</p>
                </div>
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