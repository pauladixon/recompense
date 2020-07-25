import React, { Component } from 'react';
import './SignupForm.css';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
class SignupForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };
  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/')
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  }
  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }
  render() {
    return (
      <div className='center-form'>
        <div className="signup-container">
          <header className="signup-header page-title">Sign Up</header>
          <form  onSubmit={this.handleSubmit} >
            <div>
              <div className='sign-up-form-container one'>
                <input 
                  className="sign-up-form-input"
                  type="text" 
                  placeholder="Name" 
                  value={this.state.name} 
                  name="name" 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div>
              <div className='sign-up-form-container two'>
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
              <div className='sign-up-form-container three'>
                <input 
                  className="sign-up-form-input"
                  type="password" 
                  placeholder="Password" 
                  value={this.state.password} 
                  name="password" 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div>
              <div className='sign-up-form-container four'>
                <input 
                  className="sign-up-form-input"
                  type="password" 
                  placeholder="Confirm Password" 
                  value={this.state.passwordConf} 
                  name="passwordConf" 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className="buttons-div">
              <div className="buttons">
                  <Link to='/' className="cancel">Cancel</Link>
                  <button className="sign-up-btn" disabled={this.isFormInvalid()}>Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SignupForm;