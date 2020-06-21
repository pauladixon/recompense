import React from 'react'
import RequestCard from '../../components/RequestCard/RequestCard'
import './RequestDetailPage.css'

function RequestDetailPage(props) {

    const request = props.location.state.request

    return (
        <>
            <div className='post-detail'>
                <RequestCard
                    className="request-card"
                    key={request._id}
                    request={request}
                    user={props.user}
                    handleDeleteRequest={props.handleDeleteRequest}
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

export default RequestDetailPage