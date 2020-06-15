import React from 'react'
import LinkCard from '../../components/LinkCard/LinkCard'
import { Link } from 'react-router-dom'

function LinkDetailPage (props) {
    const link = props.location.state.link
    return (
        <>
            <h1>Link Details</h1>
            <LinkCard
                key={link._id}
                link={link}
                user={props.user}
                // handleDeleteService={props.handleDeleteService}
            />
            <Link to='/directaidlinks'>Return to Aid Floor</Link>
        </>
    )
}

export default LinkDetailPage;