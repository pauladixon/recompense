import React, { Component } from 'react'
import * as linksAPI from '../../services/links-api'
import './LinkComments.css'

class LinkComments extends Component {
    state = {
        linkComment: '',
        link: this.props.link
    }

    handleAddLinkComment = async (e) => {
        e.preventDefault()
        await linksAPI.addComment(e.target.id, this.state.linkComment)
        const link = await linksAPI.getOne(this.state.link)
        this.setState({link: link, linkComment: ''})
    }

    handleDeleteLinkComment = async(e) => {
        e.preventDefault()
        await linksAPI.deleteComment(e.target.id, e.target.name)
        const link = await linksAPI.getOne(this.state.link)
        this.setState({link: link, linkComment: ''})
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    async componentDidMount(){
        const link = await linksAPI.getOne(this.state.link)
        this.setState({link: link, linkComment: ''})
    }

    render() {
        return (
            <div className='all-comments-container'>
                <div className='comments'>
                    {this.state.link && this.state.link.linkComments.map((linkComment) =>
                        <div key={linkComment._id} className='l-comment-container'>
                            <p className='creator'>{linkComment.creator} :: </p>
                            <div className='comment-text'>
                                <p>{linkComment.text}</p>
                            </div>
                            {this.props.user._id === this.props.link.user || this.props.user._id === linkComment.user ?
                                <button 
                                    className='x-btn' 
                                    id={this.props.link._id} 
                                    name={linkComment._id} 
                                    onClick={this.handleDeleteLinkComment}
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
                            onSubmit={this.handleAddLinkComment}
                        >
                            <input 
                                onChange={this.handleChange}
                                name='linkComment'
                                value={this.state.linkComment}
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