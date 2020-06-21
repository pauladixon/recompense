import React from 'react'
import LinkCard from '../../components/LinkCard/LinkCard'

function LinkDetailPage (props) {
    const link = props.location.state.link
    return (
        <>
            <h1>Link Details</h1>
            <LinkCard
                key={link._id}
                link={link}
                user={props.user}
                handleDeleteLink={props.handleDeleteLink}
            />
        </>
    )
}

export default LinkDetailPage;