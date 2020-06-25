import React, { Component } from 'react'
import * as servicesAPI from '../../services/services-api'

class ServiceComments extends Component {

    state = {
        comment: 'hi'
    }

    handleDeleteComment = async(e) => {
        await servicesAPI.deleteComment(e.target.id, e.target.name)
        this.props.handleUpdateServices()
    }

    handleAddComment = async (e) => {
        e.preventDefault();
        await servicesAPI.addComment(e.target.id, this.state.comment)
        await this.props.handleUpdateServices()
        this.setState({comment: ''})
    }

    render() {
        return (
            <>
                <div className='all-comments-container'>
                    <div className='comments'>
                        {this.props.service.comments.map((comment) =>
                            <div key={comment._id} className='Comment-container'>
                                <div className='Comment-text'>
                                    <p>{comment.text}</p>
                                </div>
                                {/* {this.props.user._id === this.state.service.user || this.props.user._id === comment.user ?
                                <button className='Post-delete' id={this.props.service._id} name={comment._id} onClick={this.handleDeleteComment}>X</button>
                                :
                                <div></div>
                                } */}
                            </div>
                        )}
                    </div>
                </div>
                <div className="comments-form">
                    <form 
                        id={this.props.service._id} 
                        className='Comment-form'  
                        onSubmit={this.handleAddComment}
                    >
                        <input 
                            onChange={this.props.handleChange}
                            name='comment'
                            value={this.comment}
                            className='Comment-input'
                            placeholder='Add a Comment'
                            autoComplete='off'
                        />
                        <button type="submit">+</button>
                    </form>
                </div>
            </>
        )
    }
}

export default ServiceComments