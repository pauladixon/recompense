import React, { Component } from 'react'
import Select from 'react-select'
import serviceCategories from '../../data'

class AddServicePage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      categories: '',
      description: '',
      exchange: '',
      city: this.props.city,
      contactEmail: ''
    }
  }

  formRef = React.createRef()

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAddService(this.state.formData)
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

  render() {
    return (
      <div className="add-service-page">
        <p>Add Service</p>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div>
            <label>Service: </label>
               <input
              className="signup-form"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            /> 
          </div>
          <div className="form-group">
            <label>Description: </label>
            <textarea 
              className="signup-form"
              name="description"
              value={this.state.formData.description}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Exchange: </label>
            <input className="signup-form"
              name="exchange"
              value={this.state.formData.exchange}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>City, State: </label>
            <input className="signup-form"
              name="city"
              value={this.state.formData.city}
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
          <div className="form-group">
            <label>Categories: </label>
            <Select
              value={this.state.formData.categories}
              isMulti
              name="categories"
              onChange={this.handleChangeCategories}
              options={serviceCategories}
              required
            />
          </div>
          <button
            className="btn"
            type="submit"
            disabled={this.state.invalidForm}
          >
            Add Service
              </button>
        </form>
      </div>
    )
  }
}

export default AddServicePage