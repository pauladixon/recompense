import React from 'react'
import { Link } from 'react-router-dom'
import '../../utils/userService'
import './LinkCard.css'

function LinkCard({ link, handleDeleteLink, user }) {
    user = user === null ? user = NaN : user

    return (
        <>
            <div className='detail-card'>
                <div>
                    <p className='card-name'>{link.name}</p>
                </div>
                <div className='card-info'>
                    <div>
                        <div className='line-item'>
                            <span className='link-label'>Pronouns :: </span>
                            <span className='link-info'>{link.pronouns}</span>
                        </div>
                        <div className='line-item'>
                            <span className='link-label'>About :: </span>
                            <span className='link-info about'>{link.description}</span>
                        </div>
                        <div className='line-item'>
                            <span className='link-label'>Venmo :: </span>
                            <span className='link-info'>{link.venmo}</span>
                        </div>
                        <div className='line-item'>
                            <span className='link-label'>CashApp :: </span>
                            <span className='link-info'>{link.cashapp}</span>
                        </div>
                        <div className='line-item'>
                            <span className='link-label'>PayPal :: </span>
                            <span className='link-info'>{link.paypal}</span>
                        </div>
                        {user._id &&
                            <div className='line-item'>
                                <span className='link-label'>Contact Email:: </span>
                                <span className='link-info'>{link.creator} at {link.contactEmail}</span>
                            </div>
                        }
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