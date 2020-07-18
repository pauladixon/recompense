import React from 'react'
import { Link } from 'react-router-dom'
import './RequestFloorItem.css'

function RequestFloorItem({ request }) {

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
                <div className='requestflooritem'>
                    <div>
                        <div className='serviceflooritem-detail-location'>
                            <p className="location">{cities}</p>
                        </div>
                        <br></br>
                        <div className='serviceflooritem-detail-name'>
                            <p className='name'>{request.name}</p>
                        </div>
                        <br></br>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default RequestFloorItem