import React from 'react'
import { Link } from 'react-router-dom'
import '../../utils/userService'
import './LinkCard.css'

function LinkCard({ link, handleDeleteLink, user }) {
    user = user === null ? user = NaN : user

    const cities = link.cities ? link.cities.map((city, idx) =>
        <span key={city.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{city.label}</span>) : <span></span>

    return (
        <>
            <div className='link-detail-card'>
                <div>
                    <p className='card-name'>{link.name}</p>
                </div>
                <div className='card-info'>
                    <div>
                        <div className="line-item">
                            <span className='link-label'>City, State :: </span>
                            <span className='link-info'>{cities}</span>
                        </div>
                        <div className='line-item'>
                            <span className='link-label'>Pronouns :: </span>
                            <span className='link-info'>{link.pronouns}</span>
                        </div>
                        <div className='line-item'>
                            <span className='link-label'>About :: </span>
                            <span className='link-info about'>{link.description}</span>
                        </div>
                        {link.venmo ? 
                        <div className='line-item'>
                            <span className='link-label'>Venmo :: </span>
                            <span className='link-info'>{link.venmo}</span>
                        </div>      : <div></div>}
                        {link.cashapp ? 
                        <div className='line-item'>
                            <span className='link-label'>CashApp :: </span>
                            <span className='link-info'>{link.cashapp}</span>
                        </div>        : <div></div>}
                        {link.paypal ? 
                        <div className='line-item'>
                            <span className='link-label'>PayPal :: </span>
                            <span className='link-info'>{link.paypal}</span>
                        </div>       : <div></div>}
                        {user._id && link.contactEmail ?
                        
                            <div className='line-item'>
                                <span className='link-label'>Contact Email:: </span>
                                <span className='link-info'>{link.creator} at {link.contactEmail}</span>
                            </div>
                        : <div></div>} 
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
                            Return to Aid Link Floor
                        </Link>
                        {user._id === link.user &&
                            <Link
                                className='edit'
                                to={{
                                    pathname: '/editlink',
                                    state: { link },
                                }}>Edit
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default LinkCard