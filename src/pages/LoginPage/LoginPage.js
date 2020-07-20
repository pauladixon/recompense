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
            <div>
              <input className="signup-form"
                type="email" 
                placeholder="Email" 
                value={this.state.email} 
                name="email" 
                onChange={this.handleChange} 
              />
            </div>
          </div>
          <div>
            <div>
              <input className="signup-form"
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
              <button className="signup-form button">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/' className="cancel">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
