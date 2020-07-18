import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = (props) => {

  return (
    <div className="footer-bar">
        &nbsp;
        <p className="foo">Copyright Ⓒ Paula Dixon & Isa Martinez, 2020</p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link className="foo-link" to="/directaidlinks">Contact Us </Link>
    </div>
  )
}

export default Footer