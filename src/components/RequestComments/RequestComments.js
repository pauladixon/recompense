import React, { Component } from 'react'
import * as requestsAPI from '../../services/requests-api'
import './RequestComments.css'
import RequestComment from '../../components/RequestComment/RequestComment'

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
                        <RequestComment
                            requestComment={requestComment}
                            key={requestComment._id}
                            user={this.props.user}
                            request={this.state.request}
                            handleDeleteRequestComment={this.props.handleDeleteRequestComment}
                        />
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