import React from 'react'
import { Link } from 'react-router-dom'
import './ServiceFloorItem.css'

function ServiceFloorItem({ service }) {

    const cities = service.cities ? service.cities.map((city, idx) =>
    <span key={city.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{city.label}</span>) : <span></span>;
    

    return (
        <>
            <Link 
                to={{
                    pathname: '/servicedetail',
                    state: { service }
                }}
            >
                <div className='serviceflooritem'>
                    <div>
                        <div className='serviceflooritem-detail-location'>
                            <p className="location">{cities}</p>
                        </div>
                        <br></br>
                        <div className='serviceflooritem-detail-name'>
                            <p className='name'>{service.name}</p>
                        </div>
                        <br></br>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ServiceFloorItem