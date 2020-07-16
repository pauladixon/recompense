import React from 'react'
import { Link } from 'react-router-dom'
import './LinkItem.css'

function LinkItem({ link }) {

    const cities = link.cities ? link.cities.map((city, idx) =>
        <span key={city.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{city.label}</span>) : <span></span>;


    return (
        <>
            <Link
                to={{
                    pathname: '/linkdetail',
                    state: { link }
                }}
            >
                <div className='link-item'>
                    <div>
                        <div className='serviceflooritem-detail-location'>
                            <p className="location">{cities}</p>
                        </div>
                        <br></br>
                        <div className='request-item-detail-name'>
                            <p className='name'>{link.name}</p>
                        </div>
                        <br></br>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default LinkItem