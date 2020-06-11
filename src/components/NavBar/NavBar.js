import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css';

const NavBar = () => {

  return (
    <div className='NavBar'>
      <Link to="/login">Log In</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/signup">Sign Up</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/">Home</Link>
    </div>
  );
};

export default NavBar;