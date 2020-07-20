import React from 'react'
import { Link } from 'react-router-dom'
import './RequestFloorItem.css'

function RequestFloorItem({ request }) {

    const cities = request.cities ? request.cities.map((city, idx) =>
        <span key={city.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{city.label}</span>) : <span></span>;

    const categories = request.categories ? request.categories.map((category, idx) =>
        <span key={category.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{category.label}</span>) : <span></span>;



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
                        <div className='serviceflooritem-detail-name'>
                            <p className='name'>{request.name}</p>
                        </div>
                        {/* <div className='serviceflooritem-detail-categories'>
                            <p className="categories">{categories}</p>
                        </div> */}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default RequestFloorItem