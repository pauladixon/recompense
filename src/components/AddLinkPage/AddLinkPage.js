import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import serviceCategories from '../../category-data'
import serviceCities from '../../city-data'
// import './AddServicePage.css'

class AddLink extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      categories: '',
      description: '',
      venmo: '',
      cashapp: '',
      paypal: '',
      city: '',
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

  handleChangeCategories = categories => {
    this.setState({ formData: { ...this.state.formData, categories } })
  }

  handleChangeCities = cities => {
    this.setState({ formData: { ...this.state.formData, cities } })
  }

  render() {
    return (
      <div className="add-request-page">
        <div className="page-header">
          <p className='page-title'>Add a Link :: </p>
        </div>
        <div className='add-request-form'>
          <form 
            ref={this.formRef} 
            autoComplete="off" 
            onSubmit={this.handleSubmit}
          >
            <div className='form-item'>
              <label className='request-label'>Link Name :: </label>
              <input
                className="request-form"
                name="name"
                value={this.state.formData.name}
                onChange={this.handleChange}
                required
              /> 
            </div>
            <div className='form-item'>
              <label className='request-label'>Description of Link :: </label>
              <textarea 
                className="request-form description"
                name="description"
                value={this.state.formData.description}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='form-item'>
              <label className='request-label'>Venmo :: </label>
              <input 
                className="request-form"
                name="venmo"
                value={this.state.formData.venmo}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='form-item'>
              <label className='request-label'>Cashapp :: </label>
              <input 
                className="request-form"
                name="cashapp"
                value={this.state.formData.cashapp}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='form-item'>
              <label className='request-label'>PayPal :: </label>
              <input 
                className="request-form"
                name="paypal"
                value={this.state.formData.paypal}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='form-item'>
              <label className='request-label'>City, State :: </label>
              <Select
                className='request-categories'
                value={this.state.formData.cities}
                isMulti
                name="cities"
                onChange={this.handleChangeCities}
                options={serviceCities}
                required
              />
            </div>
            <div className='form-item'>
              <label className='request-label'>Categories of Link :: </label>
              <Select
                className='request-categories'
                value={this.state.formData.categories}
                isMulti
                name="categories"
                onChange={this.handleChangeCategories}
                options={serviceCategories}
                required
              />
            </div>
            <div className='form-item'>
              <label className='request-label'>Contact Email :: </label>
              <input 
                className="request-form"
                name="contactEmail"
                value={this.state.formData.contactEmail}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='add-links'>
                <Link className='cancel-button' to='/links'>Cancel</Link>
                <button
                    className="btn"
                    type="submit"
                    disabled={this.state.invalidForm}
                >
                    Add Link
                </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddLink