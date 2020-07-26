import React, { Component } from 'react'
import Select from 'react-select'
import { Link, Redirect } from 'react-router-dom'


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

class EditRequestPage extends Component {
    state = {
        invalidForm: true,
        formData: this.props.location.state ? this.props.location.state.request : null
    }

    formRef = React.createRef()

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleUpdateRequest(this.state.formData)
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    handleChangeCategories = categories => {
        this.setState({
            formData: {...this.state.formData, categories},
            invalidForm: !this.formRef.current.checkValidity
        })
    }

    handleChangeCities = cities => {
        this.setState({
            formData: {...this.state.formData, cities},
            invalidForm: !this.formRef.current.checkValidity
        })
    }

    renderEditRequestForm() {
        return (
            <div className="add-service-page">
              <div className="page-header">
                <p className='page-title'>Add a Request :: </p>
              </div>
              <div className='add-service-form'>
                <form 
                  ref={this.formRef} 
                  autoComplete="off" 
                  onSubmit={this.handleSubmit}
                >
                  <div className='form-item'>
                    <label className='form-label'>Request Title :: </label>
                    <input
                      className="service-form"
                      name="name"
                      value={this.state.formData.name}
                      onChange={this.handleChange}
                      required
                    /> 
                  </div>
                  <div className='form-item'>
                    <label className='form-label'>Description of Request :: </label>
                    <textarea 
                      className="service-form description"
                      name="description"
                      value={this.state.formData.description}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className='form-item'>
                    <label className='form-label'>Exchange for Request :: </label>
                    <input 
                      className="service-form"
                      name="exchange"
                      value={this.state.formData.exchange}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className='form-item'>
                    <label className='form-label'>Categories of Request :: </label>
                    <Select
                      className='service-categories'
                      value={this.state.formData.categories}
                      name="categories"
                      onChange={this.handleChangeCategories}
                      options={this.props.categories}
                      styles={customStyles}
                      // required
                    />
                  </div>
                  <div className='form-item'>
                    <label className='form-label'>Location of request :: </label>
                    <Select
                      className='service-categories'
                      value={this.state.formData.cities}
                      name="cities"
                      onChange={this.handleChangeCities}
                      options={this.props.cities}
                      styles={customStyles}
                      // required
                    />
                  </div>
                  <div className='form-item date-group'>
                    <label className='form-label'>Dates for request :: </label>
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
                      <Link className='cancel-button' to='/requests'>Cancel</Link>
                      <button
                          className="btn"
                          type="submit"
                          disabled={this.state.invalidForm}
                      >
                          Add Request
                      </button>
                  </div>
                </form>
              </div>
            </div>
        )
    }

    render() {
        return this.state.formData ? this.renderEditRequestForm() : <Redirect to='/requests' />;
    }
}

export default EditRequestPage