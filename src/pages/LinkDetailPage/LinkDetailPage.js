import React from 'react'
import LinkCard from '../../components/LinkCard/LinkCard'

function LinkDetailPage (props) {
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

export default LinkDetailPage;