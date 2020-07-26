import React, { Component } from 'react'
import * as requestsAPI from '../../services/requests-api'
import './RequestComments.css'
import moment from 'moment'

class RequestComments extends Component {
    state = {
        requestComment: '',
        request: this.props.request
    }

    handleAddRequestComment = async (e) => {
        e.preventDefault()
        await requestsAPI.addComment(e.target.id, this.state.requestComment)
        const request = await requestsAPI.getOne(this.state.request)
        this.setState({request: request, requestComment: ''})
    }

    handleDeleteRequestComment = async(e) => {
        e.preventDefault()
        await requestsAPI.deleteComment(e.target.id, e.target.name)
        const request = await requestsAPI.getOne(this.state.request)
        this.setState({request: request, requestComment: ''})
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    async componentDidMount(){
        const request = await requestsAPI.getOne(this.state.request)
        this.setState({request: request, requestComment: ''})
    }

    render() {
        return (
            <div className='all-comments-container'>
                <div className='comments'>
                    {this.state.request && this.state.request.requestComments.map((requestComment) =>
                        <div key={requestComment._id} className='r-comment-container'>
                            <div className='comment-info'> 
                                <p className='comment-date'>{moment(requestComment.date).format('LL')}</p>
                                <p className='comment-creator'>{requestComment.creator}</p>
                            </div>
                            <div className='comment-text'>
                                <p>{requestComment.text}</p>
                            </div>
                            {this.props.user._id === this.props.request.user || this.props.user._id === requestComment.user ?
                                <button 
                                    className='x-btn' 
                                    id={this.props.request._id} 
                                    name={requestComment._id} 
                                    onClick={this.handleDeleteRequestComment}
                                > X
                                </button>
                            :
                                <div className='button-fill'></div>
                            }
                        </div>
                    )}
                    <div className='form-container'>
                        <form
                            className='comment-form'
                            id={this.props.request._id} 
                            onSubmit={this.handleAddRequestComment}
                        >
                            <input 
                                onChange={this.handleChange}
                                name='requestComment'
                                value={this.state.requestComment}
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

export default RequestComments