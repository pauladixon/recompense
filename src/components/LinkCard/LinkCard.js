import React from 'react'
// import { Link } from 'react-router-dom'
import '../../utils/userService'
import './LinkCard.css'

function LinkCard({ link, user }) {
    user = user === null ? user = NaN : user
    // const categories = service.categories.map((category, idx) =>
    //     <span key={category.value}>{idx !== 0 ? ', ' : ''}{category.label}</span>)
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
                    {user._id &&
                        <div>Contact: {link.creator} at {link.contactEmail}</div>
                    }
                </div>
                {/* <div>
                    {user._id === link.user &&
                        <Link to={{
                            pathname: '/edit',
                            state: { service },
                        }}>Edit</Link>
                    } {user._id === service.user &&
                        <button
                            onClick={() => handleDeleteService(service._id)}
                        >
                            Delete
                        </button>
                    }
                </div> */}
            </div>
        </>
    )
}

export default LinkCard