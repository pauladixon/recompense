import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = (props) => {
  let nav1 = props.user ?
    <div className='mobile-erase'>
      <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
    </div>
    :
    <div>
    </div>
  let nav2 = props.user ?
    <div >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className='nav end' to='' onClick={props.handleLogout} >Sign Out</Link>
      &nbsp;
    </div>
    :
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className='nav' to='/login'>Log In</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link className='nav' to='/signup'>Sign Up</Link>
    </div>
  return (
    <div className="nav-bar">
      {nav1}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className="nav start" to="/servicesfloor">Service Floor</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className="nav" to="/requests">Request Floor</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className="nav" to="/directaidlinks">Direct Aid</Link>
      {nav2}
    </div>

  )
}

export default NavBar