import React, { Component } from 'react'


class LinkComments extends Component {

    render() {
        return (
            <div className='all-comments-container'>
                <div className='comments'>
                    {this.props.link.linkComments.map((linkComment) =>
                        <div key={linkComment._id} className='comment-container'>
                            <p className='creator'>{linkComment.creator} :: </p>
                            <div className='comment-text'>
                                <p>{linkComment.text}</p>
                            </div>
                            {this.props.user._id === this.props.link.user || this.props.user._id === linkComment.user ?
                                <button 
                                    className='x-btn' 
                                    id={this.props.link._id} 
                                    name={linkComment._id} 
                                    onClick={this.props.handleDeleteLinkComment}
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
                            id={this.props.link._id} 
                            onSubmit={this.props.handleAddLinkComment}
                        >
                            <input 
                                onChange={this.props.handleChange}
                                name='linkComment'
                                value={this.props.linkComment}
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

export default LinkComments