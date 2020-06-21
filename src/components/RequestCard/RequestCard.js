import React from 'react'
import { Link } from 'react-router-dom'
import '../../utils/userService'
import './RequestCard.css'

function RequestCard({ request, handleDeleteRequest, user }) {
    user = user === null ? user = NaN : user

    const categories = request.categories.map((category, idx) =>
        <span key={category.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{category.label}</span>)

    const cities = request.cities.map((city, idx) =>
        <span key={city.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{city.label}</span>)

    return (
        <>
            <div className='detail-card'>
                <div>
                    <p className='card-name'>{request.name}</p>
                </div>
                <div>
                    <div>
                        <div className='line-item'>
                            <span className='request-label'>Exchange :: </span>
                            <span className='request-info'>{request.exchange}</span>
                        </div>
                        <div className='line-item'>
                            <span className='request-label'>City, State :: </span>
                            <span className='request-info'>{cities}</span>
                        </div>
                        <div className='line-item'>
                            <span className='request-label'>Categories :: </span>
                            <span className='request-info categories'>{categories}</span>
                        </div>
                        <div className='line-item'>
                            <span className='request-label'>Description :: </span>
                            <span className='request-info'>{request.description}</span>
                        </div>
                        {user._id &&
                            <div className='line-item'>
                                <span className='request-label'>Contact :: </span>
                                <span className='request-info'>{request.creator} at {request.contactEmail}</span>
                            </div>
                        }
                    </div>
                    <div className='card-links'>
                        {user._id === request.user &&
                            <button
                                className='delete'
                                onClick={() => handleDeleteRequest(request._id)}
                            >
                                Remove
                        </button>
                        }
                        <Link
                            className='home-link'
                            to='/requests'
                        >
                            Return to Requests Page
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