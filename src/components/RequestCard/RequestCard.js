import React from 'react'
import { Link } from 'react-router-dom'
import '../../utils/userService'
import './RequestCard.css'
import moment from 'moment'

function RequestCard({ request, handleDeleteRequest, user }) {
    user = user === null ? user = NaN : user

    const categories = request.categories ? request.categories.map((category, idx) =>
    <span key={category.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{category.label}</span>) : <span></span>

    const cities = request.cities ? request.cities.map((city, idx) =>
        <span key={city.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{city.label}</span>) : <span></span>

    const dateCreated = new Date(request.createdAt)

    return (
        <>
            <div className='request-detail-card'>
                <div className='title-group'>
                    <p className='card-name' key={request.id}>{request.name}</p>
                    <div className='post-date'>posted on <span>{moment(dateCreated.toLocaleString()).format('LL')}</span></div>
                </div>
                <div className='card-info'>
                    <div>
                        <div className='line-item'>
                            <span className='service-label'>Description :: </span>
                            <span className='service-info' key={request.id}>{request.description}</span>
                        </div>
                        <div className='line-item'>
                            <span className='service-label'>Exchange :: </span>
                            <span className='service-info' key={request.id}>{request.exchange}</span>
                        </div>
                        <div className='line-item'>
                            <span className='service-label'>City, State :: </span>
                            <span className='service-info' key={request.id}>{cities}</span>
                        </div>
                        <div className='line-item'>
                            <span className='service-label'>Categories :: </span>
                            <span className='service-info categories' key={request.id}>{categories}</span>
                        </div>
                        <div className='line-item'>
                            <span className='service-label'>dates requesting :: </span>
                            <div className='service-info service-dates-label'>
                                <span className='service-date' key={request.id}>{moment(request.dateBegin).format('LL')}</span>
                                to 
                                <span className='service-date' key={request.id}>{moment(request.dateEnd).format('LL')}</span>
                            </div>
                        </div>
                        {user._id && request.contactEmail ? 
                            <div className='line-item'>
                                <span className='service-label'>Contact :: </span>
                                <span className='service-info' key={request.id}>{request.creator} at {request.contactEmail}</span>
                            </div>
                        : 
                            <div></div>
                        } 
                    </div>
                    <div className='card-links'>
                        {user._id === request.user &&
                            <button
                                className='delete'
                                onClick={() => handleDeleteRequest(request._id)}
                            >
                                remove
                        </button>
                        }
                        <Link
                            className='home-link request-button'
                            to='/requests'
                        >
                            Return to Request Floor
                        </Link>
                        {user._id === request.user &&
                            <Link
                                className='edit'
                                to={{
                                    pathname: '/editrequest',
                                    state: { request },
                                }}>Edit</Link>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default RequestCard