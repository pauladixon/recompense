import React from 'react'
import { Link } from 'react-router-dom'
import './LinkFloorItem.css'

function LinkFloorItem({ link }) {

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
                        <div className='linkflooritem-detail-pronouns'>
                            <p className="pronouns">{link.pronouns}</p>
                        </div>
                        <br></br>
                        <div className='link-item-detail-name'>
                            <p className='link-name'>{link.name}</p>
                        </div>
                        <br></br>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default LinkFloorItem