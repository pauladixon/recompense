import React, { Component } from 'react'


class RequestComments extends Component {

    render() {
        return (
            <div className='all-comments-container'>
                <div className='comments'>
                    {this.props.request.requestComments.map((requestComment) =>
                        <div key={requestComment._id} className='comment-container'>
                            <p className='creator'>{requestComment.creator} :: </p>
                            <div className='comment-text'>
                                <p>{requestComment.text}</p>
                            </div>
                            {this.props.user._id === this.props.request.user || this.props.user._id === requestComment.user ?
                                <button 
                                    className='x-btn' 
                                    id={this.props.request._id} 
                                    name={requestComment._id} 
                                    onClick={this.props.handleDeleteRequestComment}
                                > X
                                </button>
                            :
                                <div></div>
                            }
                        </div>
                    )}
                    <div className='form-container'>
                        <form
                            className='comment-form'
                            id={this.props.request._id} 
                            onSubmit={this.props.handleAddRequestComment}
                        >
                            <input 
                                onChange={this.props.handleChange}
                                name='serviceComment'
                                value={this.props.requestComment}
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