import React from 'react'
import { Link } from 'react-router-dom'
import './ServiceFloorItem.css'

function ServiceFloorItem({ service }) {
    return (
        <>
            <Link 
                to={{
                    pathname: '/servicedetail',
                    state: { service }
                }}
            >
                <div className='serviceflooritem'>
                    <div>
                        <div className='serviceflooritem-detail-location'>
                            <p className="location">{service.city}</p>
                        </div>
                        <br></br>
                        <div className='serviceflooritem-detail-name'>
                            <p className='name'>{service.name}</p>
                        </div>
                        <br></br>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ServiceFloorItem