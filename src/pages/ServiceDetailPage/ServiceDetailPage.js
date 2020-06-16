import React from 'react'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import './ServiceDetailPage.css'

function ServiceDetailPage(props) {

    const service = props.location.state.service

    return (
        <>
            <div className='post-detail'>
                <ServiceCard
                    className="service-card"
                    key={service._id}
                    service={service}
                    user={props.user}
                    handleDeleteService={props.handleDeleteService}
                />
            </div>
            <div className='break-container'>
                <div className="break"></div>
            </div>
            <div className='title-container'>
                <p className="comment-title">Comments:</p>          
            </div>
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