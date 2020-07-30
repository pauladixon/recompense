import React, { Component } from 'react'
import './ServiceComments.css'
import * as servicesAPI from '../../services/services-api'
import moment from 'moment'

class ServiceComments extends Component {

    state = {
        serviceComment: '',
        service: this.props.service
    }

    handleAddServiceComment = async (e) => {
        e.preventDefault()
        await servicesAPI.addComment(e.target.id, this.state.serviceComment)
        const service = await servicesAPI.getOne(this.state.service)
        this.setState({service: service, serviceComment: ''})
    }

    handleDeleteServiceComment = async(e) => {
        e.preventDefault()
        await servicesAPI.deleteComment(e.target.id, e.target.name)
        const service = await servicesAPI.getOne(this.state.service)
        this.setState({service: service, serviceComment: ''})
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    async componentDidMount(){
        const service = await servicesAPI.getOne(this.state.service)
        this.setState({service: service, serviceComment: ''})
    }
      
    render() {
        return (
            <div className='all-comments-container'>
                <div className='comments'>
                    {this.state.service && this.state.service.serviceComments.map((serviceComment) =>
                        <div key={serviceComment._id} className='s-comment-container'>
                            <div className='comment-info'> 
                                {/* <p className='comment-date'>{moment(serviceComment.date).format('LL')}</p> */}
                                <p className='comment-creator'>{serviceComment.creator}</p>
                            </div>
                            <div className='comment-text'>
                                <p>{serviceComment.text}</p>
                            </div>
                            {this.props.user._id === this.props.service.user || this.props.user._id === serviceComment.user ?
                                <>
                                    <p className='my-comment-date'>{moment(serviceComment.timestamps).format('LL')}</p>
                                    <button 
                                        className='x-btn' 
                                        id={this.props.service._id} 
                                        name={serviceComment._id} 
                                        onClick={this.handleDeleteServiceComment}
                                    > X
                                    </button>
                                </>
                            :
                            <p className='comment-date'>{moment(serviceComment.timestamps).format('LL')}</p>
                            }
                        </div>
                    )}
                    <div className='form-container'>
                        <form
                            className='comment-form'
                            id={this.props.service._id} 
                            onSubmit={this.handleAddServiceComment}
                        >
                            <input 
                                onChange={this.handleChange}
                                name='serviceComment'
                                value={this.state.serviceComment}
                                className='comment-input'
                                autoComplete='off'
                            />
                            <button
                                className="add-btn"
                                type="submit"
                            >
                                →
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceComments