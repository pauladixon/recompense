import React from 'react'
import { Link } from 'react-router-dom'
import '../../utils/userService'

function LinkCard({ link, handleDeleteLink, user }) {
    user = user === null ? user = NaN : user

    const categories = link.categories ? link.categories.map((category, idx) =>
        <span key={category.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{category.label}</span>) : <span></span>;

    const cities = link.cities ? link.cities.map((city, idx) =>
        <span key={city.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{city.label}</span>) : <span></span>;

    return (
        <>
            <div className='detail-card'>
                <div>
                    <p className='card-name'>{link.name}</p>
                </div>
                <div>
                    <div>
                    <div className='line-item'>
                        <span className='request-label'>Description :: </span>
                        <span className='request-info'>{link.description}</span>
                    </div>
                    <div className='line-item'>
                        <span className='request-label'>CashApp :: </span>
                        <span className='request-info'>{link.cashapp}</span>
                    </div>
                    <div className='line-item'>
                        <span className='request-label'>Venmo :: </span>
                        <span className='request-info'>{link.venmo}</span>
                    </div>
                    <div className='line-item'>
                        <span className='request-label'>PayPal :: </span>
                        <span className='request-info'>{link.paypal}</span>
                    </div>
                    <div className='line-item'>
                        <span className='request-label'>Categories :: </span>
                        <span className='request-info categories'>{categories}</span>
                    </div>
                    <div className='line-item'>
                        <span className='request-label'>City, State :: </span>
                        <span className='request-info'>{cities}</span>
                    </div>
                    {user._id &&
                        <div className='line-item'>
                            <span className='request-label'>Contact :: </span>
                            <span className='request-info'>{link.creator} at {link.contactEmail}</span>
                        </div>
                    }
                </div>
                </div>
                <div className='card-links'>
                    {user._id === link.user &&
                        <button
                            className='delete'
                            onClick={() => handleDeleteLink(link._id)}
                        >
                            Remove
                        </button>
                    }
                    <Link
                        className='home-link'
                        to='/directaidlinks'
                    >
                        Return to Links Page
                        </Link>
                    {user._id === link.user &&
                        <Link
                            className='edit'
                            to={{
                                pathname: '/editlink',
                                state: { link },
                            }}>Edit</Link>
                    }
                </div>
            </div>
        </>
    )
}

export default LinkCard