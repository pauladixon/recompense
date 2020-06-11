import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className='nav'>
      <Link className='nav' to='' >Log Out</Link>
    </div>
    :
    <div>
      <Link className='nav' to='/login'>Log In</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link className='nav' to='/signup'>Sign Up</Link>
    </div>
  return (
    <div className="nav-bar">
      {nav}
    </div>

  );
};

export default NavBar;