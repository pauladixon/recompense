import React from 'react'
import { Link } from 'react-router-dom'
import '../../utils/userService'
import './ServiceCard.css'
import moment from 'moment'

function ServiceCard({ service, handleDeleteService, user }) {
    user = user === null ? user = NaN : user

    const categories = service.categories ? service.categories.map((category, idx) =>
        <span key={category.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{category.label}</span>) : <span></span>

    const cities = service.cities ? service.cities.map((city, idx) =>
        <span key={city.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{city.label}</span>) : <span></span>

    return (
        <>
            <div className='detail-card'>
                <div className='title-group'>
                    <p className='card-name' key={service.id}>{service.name}</p>
                </div>
                <div className='card-info'>
                    <div>
                        <div className='line-item'>
                            <span className='service-label'>Description :: </span>
                            <span className='service-info' key={service.id}>{service.description}</span>
                        </div>
                        <div className='line-item'>
                            <span className='service-label'>Exchange :: </span>
                            <span className='service-info' key={service.id}>{service.exchange}</span>
                        </div>
                        <div className='line-item'>
                            <span className='service-label'>City, State :: </span>
                            <span className='service-info' key={service.id}>{cities}</span>
                        </div>
                        <div className='line-item'>
                            <span className='service-label'>Categories :: </span>
                            <span className='service-info categories' key={service.id}>{categories}</span>
                        </div>
                        <div className='line-item'>
                            <span className='service-label'>dates available :: </span>
                            <div className='service-info service-dates-label'>
                                <span className='service-date' key={service.id}>{moment(service.dateBegin).format('LL')}</span>
                                to 
                                <span className='service-date' key={service.id}>{moment(service.dateEnd).format('LL')}</span>
                            </div>
                        </div>
                        {user._id && service.contactEmail ?
                            <div className='line-item'>
                                <span className='service-label'>contact info :: </span>
                                <span className='service-info' key={service.id}>{service.creator} at {service.contactEmail}</span>
                            </div>
                            : 
                            <div></div>
                        }
                    </div>
                    <div className='card-links'>
                        {user._id === service.user &&
                            <button
                                className='delete'
                                onClick={() => handleDeleteService(service._id)}
                            >
                                remove
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
                                }}>Edit
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard