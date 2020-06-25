import React, { Component } from 'react'

class ServiceComments extends Component {

    render() {
        return (
            <>
                <div className='all-comments-container'>
                    <div className='comments'>
                        {this.props.service.serviceComments.map((serviceComment) =>
                            <div key={serviceComment._id} className='Comment-container'>
                                <div className='Comment-text'>
                                    <p>{serviceComment.text}</p>
                                </div>
                                {this.props.user._id === this.props.service.user || this.props.user._id === serviceComment.user ?
                                <button className='Post-delete' id={this.props.service._id} name={serviceComment._id} onClick={this.props.handleDeleteServiceComment}>X</button>
                                :
                                <div></div>
                                }
                            </div>
                        )}
                    </div>
                </div>
                <div className="comments-form">
                    <form 
                        id={this.props.service._id} 
                        className='Comment-form'  
                        onSubmit={this.props.handleAddServiceComment}
                    >
                        <input 
                            onChange={this.props.handleChange}
                            name='serviceComment'
                            value={this.props.serviceComment}
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