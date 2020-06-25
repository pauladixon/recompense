import React, { Component } from 'react'
import * as servicesAPI from '../../services/services-api'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import ServiceComments from '../../components/ServiceComments/ServiceComments'
import './ServiceDetailPage.css'

class ServiceDetailPage extends Component {

    state = {
        service: this.props.location.state.service,
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleUpdateServices = async () => {
        const services = await servicesAPI.getAll()
        this.setState({services: services})
    }

    render() {
        return (
            <>
                <div className='post-detail'>
                    <ServiceCard
                        className="service-card"
                        key={this.state.service._id}
                        service={this.state.service}
                        user={this.props.user}
                        handleDeleteService={this.props.handleDeleteService}
                    />
                </div>
                <div className='break-container'>
                    <div className="break"></div>
                </div>
                <div className='title-container'>
                    <p className="comment-title">Comments:</p>          
                </div>
                <ServiceComments
                    service={this.state.service}
                    user={this.props.user}
                    handleChange={this.handleChange}
                    handleUpdateServices={this.handleUpdateServices}
                />
            </>
        )
    }
}

export default ServiceDetailPage