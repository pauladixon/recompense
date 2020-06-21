import React from 'react'
import { Link } from 'react-router-dom'
import './RequestItem.css'

function RequestItem({ request }) {

    const cities = request.cities.map((city, idx) =>
        <span key={city.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{city.label}</span>)


    return (
        <>
            <Link
                to={{
                    pathname: '/requestdetail',
                    state: { request }
                }}
            >
                <div className='reques-titem'>
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