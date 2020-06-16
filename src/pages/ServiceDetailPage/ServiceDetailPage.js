import React from 'react'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import { Link } from 'react-router-dom'
import './ServiceDetailPage.css'

function ServiceDetailPage(props) {

    const service = props.location.state.service

    return (
        <>
            <div className='detail-page'>
                <Link
                    className='home-link'
                    to='/servicesfloor'
                >
                    Return to Services Floor</Link>
                <ServiceCard
                    className="service-card"
                    key={service._id}
                    service={service}
                    user={props.user}
                    handleDeleteService={props.handleDeleteService}
                />
            </div>

            <hr />
            <p className="comment-header">Comments:</p>
            <div className="comments-form">

                <form>
                    <input>

                    </input>
                    <button>+</button>
                </form>
            </div>
        </>
    )
}

export default ServiceDetailPage