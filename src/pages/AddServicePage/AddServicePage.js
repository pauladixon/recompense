import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import './AddServicePage.css'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#3c0c15' : '#e3dbc9',
    color: state.isSelected ? 'white' : '#3c0c15',
  }),
  control: () => ({
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

class AddServicePage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      categories: '',
      description: '',
      exchange: '',
      city: '',
      contactEmail: '',
      dateBegin: '',
      dateEnd: ''
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

  handleChangeCities = cities => {
    this.setState({ formData: { ...this.state.formData, cities } })
  }

  render() {
    return (
      <div className="add-service-page">
        <div className="page-header">
          <p className='page-title'>Add a Service :: </p>
        </div>
        <div className='add-service-form'>
          <form
            ref={this.formRef} 
            autoComplete="off" 
            onSubmit={this.handleSubmit}
          >
            <div className='form-item'>
              <label className='form-label'>Service Title :: </label>
              <input
                className="service-form"
                name="name"
                value={this.state.formData.name}
                onChange={this.handleChange}
                required
              /> 
            </div>
            <div className='form-item'>
              <label className='form-label'>Description of Service :: </label>
              <textarea 
                className="service-form description"
                name="description"
                value={this.state.formData.description}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='form-item'>
              <label className='form-label'>Exchange for Service :: </label>
              <input 
                className="service-form"
                name="exchange"
                value={this.state.formData.exchange}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='form-item'>
              <label className='form-label'>Categories of Service :: </label>
              <Select
                className='service-categories'
                value={this.state.formData.categories}
                styles={customStyles}
                name="categories"
                onChange={this.handleChangeCategories}
                options={this.props.categories}
                styles={customStyles}
                required
              />
            </div>
            <div className='form-item'>
              <label className='form-label'>Location of service :: </label>
              <Select
                className='service-categories'
                value={this.state.formData.cities}
                name="cities"
                onChange={this.handleChangeCities}
                options={this.props.cities}
                styles={customStyles}
                required
              />
            </div>
            <div className='form-item date-group'>
              <label className='form-label'>Dates of availability :: </label>
              <div>
                <input 
                  className="dates date-one"
                  name="dateBegin"
                  type='date'
                  value={this.state.formData.dateBegin}
                  onChange={this.handleChange}
                  required
                />
                <input 
                  className="dates date-two"
                  name="dateEnd"
                  type='date'
                  value={this.state.formData.dateEnd}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className='form-item'>
              <label className='form-label'>Contact Email :: </label>
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
                    Add Service
                </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddServicePage