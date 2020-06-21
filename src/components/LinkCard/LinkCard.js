import React from 'react'
import { Link } from 'react-router-dom'
import '../../utils/userService'
import './LinkCard.css'

function LinkCard({ link, handleDeleteLink, user }) {
    user = user === null ? user = NaN : user
    const categories = link.categories.map((category, idx) =>
        <span key={category.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{category.label}</span>)

    return (
        <>
            <div className='detail-card'>
                <div>
                    <h4>{link.name}</h4>
                    <h4>link card</h4>
                </div>
                <div>
                    <div>Description: {link.description}</div>
                    <div>cashapp: {link.cashapp}</div>
                    <div>venmo: {link.venmo}</div>
                    <div>paypal: {link.paypal}</div>
                    <div className='line-item'>
                            <span className='request-label'>Categories :: </span>
                            <span className='request-info categories'>{categories}</span>
                        </div>
                    {user._id &&
                        <div>Contact: {link.creator} at {link.contactEmail}</div>
                    }
                </div>
                <div>
                    {user._id === link.user &&
                        <Link to={{
                            pathname: '/edit',
                            state: { link },
                        }}>Edit</Link>
                    } {user._id === link.user &&
                        <button
                            onClick={() => handleDeleteLink(link._id)}
                        >
                            Delete
                        </button>
                    }
                </div>
            </div>
        </>
    )
}

export default LinkCard