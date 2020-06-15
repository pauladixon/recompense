import React from 'react'
import LinkCard from '../../components/LinkCard/LinkCard'
import { Link } from 'react-router-dom'

function LinkDetailPage (props) {
    // const service = props.location.state.service
    return (
        <>
            <h1>Link Details</h1>
            <LinkCard
                // key={service._id}
                // service={service}
                user={props.user}
                // handleDeleteService={props.handleDeleteService}
            />
            <Link to='/directaidlinks'>Return to Aid Floor</Link>
        </>
    )
}

export default LinkDetailPage;