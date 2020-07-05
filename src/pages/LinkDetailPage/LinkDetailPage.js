import React from 'react'
import LinkCard from '../../components/LinkCard/LinkCard'
import AddLinkComment from '../../components/AddLinkComment/AddLinkComment';

function LinkDetailPage(props) {
    const link = props.location.state.link
    return (
        <>
            <div className='post-detail'>
                <LinkCard
                    key={link._id}
                    link={link}
                    user={props.user}
                    handleDeleteLink={props.handleDeleteLink}
                />
            </div>
            <div className='break-container'>
                <div className="break"></div>
            </div>
            <div>
                <AddLinkComment user={props.user} handleAddLinkComment={props.handleAddLinkComment} link={link} />
                {link.linkComments.map(linkComment =>
                    <div className="comment-section">
                        <p id="comment-content">{linkComment.comment}</p>
                        {/* <p id="comment-name">Posted by {comment.commentUser.name}</p> */}
                    </div>
                )}
            </div>
        </>
    )
}

export default LinkDetailPage;