import React from 'react'
import { Link } from 'react-router-dom'
import '../../utils/userService'
import './ServiceCard.css'

function ServiceCard({ service, handleDeleteService, user }) {
    user = user === null ? user = NaN : user

    const categories = service.categories.map((category, idx) =>
        <span key={category.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{category.label}</span>)

    const cities = service.cities ? service.cities.map((city, idx) =>
        <span key={city.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{city.label}</span>) : <span></span>
        
    return (
        <>
            <div className='detail-card'>
                <div>
                    <p className='card-name'>{service.name}</p>
                </div>
                <div>
                    <div>
                        <div className='line-item'>
                            <span className='service-label'>Exchange :: </span>
                            <span className='service-info'>{service.exchange}</span>
                        </div>
                        <div className='line-item'>
                            <span className='service-label'>City, State :: </span>
                            <span className='service-info'>{cities}</span>
                        </div>
                        <div className='line-item'>
                            <span className='service-label'>Categories :: </span>
                            <span className='service-info categories'>{categories}</span>
                        </div>
                        <div className='line-item'>
                            <span className='service-label'>Description :: </span>
                            <span className='service-info'>{service.description}</span>
                        </div>
                        {user._id &&
                            <div className='line-item'>
                                <span className='service-label'>Contact :: </span>
                                <span className='service-info'>{service.creator} at {service.contactEmail}</span>
                            </div>
                        }
                    </div>
                    <div className='card-links'>
                        {user._id === service.user &&
                            <button
                                className='delete'
                                onClick={() => handleDeleteService(service._id)}
                            >
                                Remove
                        </button>
                        }
                        <Link
                            className='home-link'
                            to='/servicesfloor'
                        >
                            Return to Service Floor
                        </Link>
                        {user._id === service.user &&
                            <Link
                                className='edit'
                                to={{
                                    pathname: '/editservice',
                                    state: { service },
                                }}>Edit</Link>
                        } 
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard