import React from 'react'
import { Link } from 'react-router-dom'
import LinkFloorItem from '../../components/LinkFloorItem/LinkFloorItem'
import './LinkFloor.css'

const LinkFloor = (props) => {
  return (
    <div className="service-page">
      <div className="page-header">
        <p className='page-title'>Direct Aid Links to Assist BIPOC ::</p>
        <p>This is a place for black and indigenous people to post their payment platform handles and a place for non-black people to initiate direct peer-to-peer support for BIPOC individuals in your online community.</p>
        <br></br>
        <Link className="add-service" to="/addlink">Post an Aid Link</Link>
      </div>
      <div className="page-content">
        <div className="posts">
          {props.links.map(link =>
            <LinkFloorItem link={link} key={link._id} />
          )}
        </div>
      </div>
    </div>
  )
}
export default LinkFloor