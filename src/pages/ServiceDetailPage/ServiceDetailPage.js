import React, { Component } from 'react'
import * as servicesAPI from '../../services/services-api'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import './ServiceDetailPage.css'

class ServiceDetailPage extends Component {

    state = {
        service: this.props.location.state.service,
        text: '',
        comment: '',
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleUpdateServices = async () => {
        const services = await servicesAPI.getAll()
        this.setState({services: services})
    }
    
    handleDeleteComment = async(e) => {
        await servicesAPI.deleteComment(e.target.id, e.target.name)
        this.handleUpdateServices()
    }

    handleAddComment = async (e) => {
        e.preventDefault();
        await servicesAPI.addComment(e.target.id, this.state.comment)
        await this.handleUpdateServices()
        this.setState({comment: ''})
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
                <div className='all-comments-container'>
                    {/* {this.state.service.comments.map((comment) =>
                        <div key={comment._id} className='Comment-container'>
                            <div className='Comment-text'>
                                <p>{comment.text}</p>
                            </div>
                            {this.props.user._id === this.state.service.user || this.props.user._id === comment.user ?
                            <button className='Post-delete' id={this.state.service._id} name={comment._id} onClick={this.handleDeleteComment}>X</button>
                            :
                            <div></div>
                            }
                        </div>
                    )} */}
                </div>
                <div className="comments-form">
                    <form id={this.state.service._id} className='Comment-form'  onSubmit={this.handleAddComment}>
                        <input 
                            onChange={this.handleChange}
                            name='comment'
                            value={this.comment}
                            className='Comment-input'
                            placeholder='Add Comment'
                            autoComplete='off'
                        />
                        <button type="submit">+</button>
                    </form>
                </div>
            </>
        )
    }
}

export default ServiceDetailPage