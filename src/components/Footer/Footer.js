import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = (props) => {

  return (
    <div className="footer-bar">
        &nbsp;
        <p className="mobile-foo">Ⓒ Paula Dixon & Isa Martinez, 2020</p>
        <p className="foo">Copyright Ⓒ Paula Dixon & Isa Martinez, 2020</p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <a 
          className="foo-link" 
          href="mailto:isasofma@gmail.com paulapdixon@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a> */}
        <Link className="foo-link" to="/contact">Contact us</Link>
    </div>
  )
}

export default Footer