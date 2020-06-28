import React, { Component } from 'react'
import './ServiceComments.css'


class ServiceComments extends Component {

    render() {
        return (
            <div className='all-comments-container'>
                <div className='comments'>
                    {this.props.service.serviceComments.map((serviceComment) =>
                        <div key={serviceComment._id} className='comment-container'>
                            <p className='creator'>{serviceComment.creator} :: </p>
                            <div className='comment-text'>
                                <p>{serviceComment.text}</p>
                            </div>
                            {this.props.user._id === this.props.service.user || this.props.user._id === serviceComment.user ?
                                <button 
                                    className='x-btn' 
                                    id={this.props.service._id} 
                                    name={serviceComment._id} 
                                    onClick={this.props.handleDeleteServiceComment}
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
                            id={this.props.service._id} 
                            onSubmit={this.props.handleAddServiceComment}
                        >
                            <input 
                                onChange={this.props.handleChange}
                                name='serviceComment'
                                value={this.props.serviceComment}
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