import React, { Component } from 'react'
import RequestCard from '../../components/RequestCard/RequestCard'
import RequestComments from '../../components/RequestComments/RequestComments'

class RequestDetailPage extends Component {

    state = {
        request: this.props.location.state.request,
    }

    render() {
        return (
            <>
                <div className='post-detail'>
                    <RequestCard
                        className="service-card"
                        key={this.state.request._id}
                        request={this.state.request}
                        user={this.props.user}
                        handleDeleteRequest={this.props.handleDeleteRequest}
                    />
                </div>
                <div className='break-container'>
                    <div className="break"></div>
                </div>
                <div className='title-container'>
                    <p className="comment-title">Comments ::</p>          
                </div>
                <RequestComments
                    key={this.state.request._id}
                    request={this.state.request}
                    user={this.props.user}
                    handleChange={this.props.handleChange}
                    requestComment={this.props.requestComment}
                    handleAddRequestComment={this.props.handleAddRequestComment}
                    handleDeleteRequestComment={this.props.handleDeleteRequestComment}
                />
            </>
        )
    }
}

export default RequestDetailPage