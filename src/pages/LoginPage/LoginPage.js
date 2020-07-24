import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import userService from '../../utils/userService'

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async(e) => {
    e.preventDefault()
    try {
        await userService.login(this.state)
        this.props.handleSignupOrLogin()
        this.props.history.push('/')
    } catch (err) {
        alert('invalid credentials!')
    }
  }

  render() {
    return (
      <div className="signup-container">
        <header className="signup-header page-title">Log In</header>
        <form onSubmit={this.handleSubmit} >
          <div>
            <div className='sign-up-form-container one'>
              <input 
                className="sign-up-form-input"
                type="email" 
                placeholder="Email" 
                value={this.state.email} 
                name="email" 
                onChange={this.handleChange} 
              />
            </div>
          </div>
          <div>
            <div className='sign-up-form-container four'>
              <input 
                className="sign-up-form-input"
                type="password"
                placeholder="Password"
                value={this.state.pw}
                name="pw"
                onChange={this.handleChange} 
              />
            </div>
          </div>
          <div className='buttons-div'>
            <div className='buttons'>
              <Link to='/' className="cancel">Cancel</Link>
              &nbsp;&nbsp;&nbsp;
              <button className="sign-up-btn">Log In</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
