import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className='nav' to='' onClick={props.handleLogout} >Log Out</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    :
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className='nav' to='/login'>Log In</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link className='nav' to='/signup'>Sign Up</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  return (
    <div className="nav-bar">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className="nav" to="/directaidlinks">Direct Aid</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className="nav" to="/servicesfloor">Service Floor</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className="nav" to="/requests">Request Floor</Link>
      {nav}
    </div>

  );
};

export default NavBar;