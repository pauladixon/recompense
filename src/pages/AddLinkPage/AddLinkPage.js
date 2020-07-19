import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

class AddLinkPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      city: '',
      pronouns: '',
      description: '',
      venmo: '',
      cashapp: '',
      paypal: '',
      contactEmail: ''
    }
  }

  formRef = React.createRef()

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAddLink(this.state.formData)
  }

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value, }
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  }

  handleChangeCities = cities => {
    this.setState({ formData: { ...this.state.formData, cities } })
  }

  render() {
    return (
      <div className="add-service-page">
        <div className="page-header">
          <p className='page-title'>Add a Link :: </p>
        </div>
        <div className='add-service-form'>
          <form 
            ref={this.formRef} 
            autoComplete="off" 
            onSubmit={this.handleSubmit}
          >
            <div className='form-item'>
              <label className='service-label'>Your Name :: </label>
              <input
                className="service-form"
                name="name"
                value={this.state.formData.name}
                onChange={this.handleChange}
                required
              /> 
            </div>
            <div className='form-item'>
              <label className='service-label'>Your Pronouns :: </label>
              <input
                className="service-form"
                name="pronouns"
                value={this.state.formData.pronouns}
                onChange={this.handleChange}
                required
              /> 
            </div>
            <div className='form-item'>
              <label className='service-label'>Location :: </label>
              <Select
                className='service-categories'
                value={this.state.formData.cities}
                isMulti
                name="cities"
                onChange={this.handleChangeCities}
                options={this.props.cities}
                required
              />
            </div>
            <div className='form-item'>
              <label className='service-label'>About You :: </label>
              <textarea 
                className="service-form description"
                name="description"
                value={this.state.formData.description}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='form-item'>
              <label className='service-label'>Venmo :: </label>
              <input 
                className="service-form"
                name="venmo"
                value={this.state.formData.venmo}
                onChange={this.handleChange}
                // required
              />
            </div>
            <div className='form-item'>
              <label className='service-label'>Cashapp :: </label>
              <input 
                className="service-form"
                name="cashapp"
                value={this.state.formData.cashapp}
                onChange={this.handleChange}
                // required
              />
            </div>
            <div className='form-item'>
              <label className='service-label'>PayPal :: </label>
              <input 
                className="service-form"
                name="paypal"
                value={this.state.formData.paypal}
                onChange={this.handleChange}
                // required
              />
            </div>
            <div className='form-item'>
              <label className='service-label'>Contact Email :: </label>
              <input 
                className="service-form"
                name="contactEmail"
                value={this.state.formData.contactEmail}
                onChange={this.handleChange}
                // required
              />
            </div>
            <div className='add-links'>
                <Link className='cancel-button' to='/servicesfloor'>Cancel</Link>
                <button
                    className="btn"
                    type="submit"
                    disabled={this.state.invalidForm}
                >
                    Add Direct Aid Link
                </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddLinkPage