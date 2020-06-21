import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Select from 'react-select';
import serviceCategories from '../../data';
import serviceCities from '../../city-data'

class AddLinkPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      description: '',
      cashapp: '',
      venmo: '',
      paypal: '',
      contactEmail: '',
      city: '',
      categories: ''
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
      <div className="Home">
        <p>add link</p>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input className="signup-form"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              className="signup-form"
              name="description"
              value={this.state.formData.description}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>CashApp: </label>
            <input className="signup-form"
              name="cashapp"
              value={this.state.formData.cashapp}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Venmo: </label>
            <input className="signup-form"
              name="venmo"
              value={this.state.formData.venmo}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Paypal: </label>
            <input className="signup-form"
              name="paypal"
              value={this.state.formData.paypal}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact Email: </label>
            <input className="signup-form"
              name="contactEmail"
              value={this.state.formData.contactEmail}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className='form-item'>
              <label className='request-label'>Categories :: </label>
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
          <div className="add-links">
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
    );
  }
}
export default AddLinkPage;