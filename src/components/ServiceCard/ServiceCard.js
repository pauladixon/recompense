import React from 'react'
import { Link } from 'react-router-dom'
import '../../utils/userService'
import './ServiceCard.css'

function ServiceCard({ service, handleDeleteService, user }) {
    user = user === null ? user = NaN : user
    const categories = service.categories.map((category, idx) =>
        <span key={category.value}>{idx !== 0 ? ', ' : ''}{category.label}</span>)
    return (
        <>
            <div className='detail-card'>
                <div>
                    <h4>{service.name}</h4>
                </div>
                <div>
                    <div className='line-item'>
                        <span className='service-label'>Exchange: </span>
                        <span className='service-info'>{service.exchange}</span>
                    </div>
                    <div className='line-item'>
                        <span className='service-label'>City, State </span>
                        <span className='service-info'>{service.city}</span>
                    </div>
                    <div className='line-item'>
                        <span className='service-label'>Categories: </span>
                        <span className='service-info'>{categories}</span>
                    </div>
                    <div className='line-item'>
                        <span className='service-label'>Description: </span>
                        <span className='service-info'>{service.description}</span>
                    </div>
                    {user._id &&
                        <div className='line-item'>
                            <span className='service-label'>Contact: </span>
                            <span className='service-info'>{service.creator} at {service.contactEmail}</span>
                        </div>
                    }
                </div>
                <div className='card-links'>
                    {user._id === service.user &&
                        <Link 
                            className='edit'
                            to={{
                                pathname: '/editservice',
                                state: { service },
                        }}>Edit</Link>
                    } {user._id === service.user &&
                        <button
                            className='delete'
                            onClick={() => handleDeleteService(service._id)}
                        >
                            Delete
                        </button>
                    }
                </div>
            </div>
        </>
    )
}

export default ServiceCard