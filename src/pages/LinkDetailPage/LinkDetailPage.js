import React, { Component } from 'react'
import LinkCard from '../../components/LinkCard/LinkCard'
import LinkComments from '../../components/LinkComments/LinkComments'

class LinkDetailPage extends Component {

    state = {
        link: this.props.location.state.link,
    }

    // const link = props.location.state.link
    render() {
        return (
            <>
                <div className='post-detail'>
                    <LinkCard
                    className="service-card"
                        key={this.state.link._id}
                        link={this.state.link}
                        user={this.props.user}
                        handleDeleteLink={this.props.handleDeleteLink}
                    />
                </div>
                <div className='break-container'>
                    <div className="break"></div>
                </div>
                <div className='title-container'>
                    <p className="comment-title">Comments ::</p>          
                </div>
                <LinkComments
                    key={this.state.link._id}
                    link={this.state.link}
                    user={this.props.user}
                    handleChange={this.props.handleChange}
                    linkComment={this.props.linkComment}
                    handleAddLinkComment={this.props.handleAddLinkComment}
                    handleDeleteLinkComment={this.props.handleDeleteLinkComment}
                />
            </>
        )
    }
}
export default LinkDetailPage;