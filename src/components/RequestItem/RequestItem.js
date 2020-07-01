import React from 'react'
import { Link } from 'react-router-dom'

function RequestItem({ request }) {

    const cities = request.cities ? request.cities.map((city, idx) =>
        <span key={city.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{city.label}</span>) : <span></span>;


    return (
        <>
            <Link
                to={{
                    pathname: '/requestdetail',
                    state: { request }
                }}
            >
                <div className='request-item'>
                    <div>
                        <div className='request-item-detail-location'>
                            <p className="location">{cities}</p>
                        </div>
                        <br></br>
                        <div className='request-item-detail-name'>
                            <p className='name'>{request.name}</p>
                        </div>
                        <br></br>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default RequestItem