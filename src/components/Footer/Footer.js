import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = (props) => {

  return (
    <div className="footer-bar">
        &nbsp;
        <p className="foo">Copyright Ⓒ Paula Dixon & Isa Martinez, 2020</p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="foo-link" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=isasofma@gmail.com paulapdixon@gmail.com" target="_blank"
                    rel="noopener noreferrer">Contact us</a>
    </div>
  )
}

export default Footer