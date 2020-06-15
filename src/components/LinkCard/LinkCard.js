import React from 'react'
// import { Link } from 'react-router-dom'
import '../../utils/userService'
import './LinkCard.css'

function LinkCard(props) {
    // user = user === null ? user = NaN : user
    // const categories = service.categories.map((category, idx) =>
    //     <span key={category.value}>{idx !== 0 ? ', ' : ''}{category.label}</span>)
    return (
        <>
            <div className='detail-card'>
                <div>
                    {/* <h4>{service.name}</h4> */}
                    <h4>link card</h4>
                </div>
                {/* <div>
                    <div>Exchange: {service.exchange}</div>
                    <div>City, State: {service.city}</div>
                    <div>Categories: {categories}</div>
                    <div>Description: {service.description}</div>
                    {user._id &&
                        <div>Contact: {service.creator} at {service.contactEmail}</div>
                    }
                </div> */}
                {/* <div>
                    {user._id === service.user &&
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