import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Select from 'react-select'


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

class EditLinkPage extends Component {
    state = {
        invalidForm: true,
        formData: this.props.location.state ? this.props.location.state.link : null
    }

    formRef = React.createRef()

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleUpdateLink(this.state.formData)
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    handleChangeCities = cities => {
        this.setState({
            formData: {...this.state.formData, cities},
            invalidForm: !this.formRef.current.checkValidity
        })
    }


    renderEditLinkForm() {
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
                    <label className='form-label'>Your Name :: </label>
                    <input
                      className="service-form"
                      name="name"
                      value={this.state.formData.name}
                      onChange={this.handleChange}
                      required
                    /> 
                  </div>
                  <div className='form-item'>
                    <label className='form-label'>Your Pronouns :: </label>
                    <input
                      className="service-form"
                      name="pronouns"
                      value={this.state.formData.pronouns}
                      onChange={this.handleChange}
                      required
                    /> 
                  </div>
                  <div className='form-item'>
                    <label className='form-label'>About You :: </label>
                    <textarea 
                      className="service-form description"
                      name="description"
                      value={this.state.formData.description}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className='form-item'>
                    <label className='form-label'>Venmo :: </label>
                    <input 
                      className="service-form"
                      name="venmo"
                      value={this.state.formData.venmo}
                      onChange={this.handleChange}
                      // required
                    />
                  </div>
                  <div className='form-item'>
                    <label className='form-label'>Cashapp :: </label>
                    <input 
                      className="service-form"
                      name="cashapp"
                      value={this.state.formData.cashapp}
                      onChange={this.handleChange}
                      // required
                    />
                  </div>
                  <div className='form-item'>
                    <label className='form-label'>PayPal :: </label>
                    <input 
                      className="service-form"
                      name="paypal"
                      value={this.state.formData.paypal}
                      onChange={this.handleChange}
                      // required
                    />
                  </div>
                  <div className='form-item'>
                    <label className='form-label'>Location :: </label>
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
                    <label className='form-label'>Date Posted :: </label>
                    <div>
                      <input 
                        className="dates date-link"
                        name="datePosted"
                        type='date'
                        value={this.state.formData.datePosted}
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
                          update Aid Link
                      </button>
                  </div>
                </form>
              </div>
            </div>
        )
    }

    render() {
        return this.state.formData ? this.renderEditLinkForm() : <Redirect to='/directaidlinks' />;
    }
}

export default EditLinkPage