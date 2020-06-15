import React from 'react'
import { Link } from 'react-router-dom'
import './ServiceFloorItem.css'

function ServiceFloorItem({ service }) {
    return (
        <>
            <div className='serviceflooritem'>
                <div >
                    <div className="service-name">
                       <p >{service.name}</p> 
                    </div>
                    
                    <div>
                    <p>{service.city}</p>
                    <p>{service.exchange}</p>

                    </div>
                </div>
                <div className='serviceflooritem-detail-link'>
                    <Link 
                        className="detail-link"
                        to={{
                            pathname: '/servicedetail',
                            state: { service }
                        }}
                    > Details
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ServiceFloorItem