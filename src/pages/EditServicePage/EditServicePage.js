import React, { Component } from 'react'
import Select from 'react-select'
import { Link, Redirect } from 'react-router-dom'
import serviceCategories from '../../data'

class EditServicePage extends Component {
    state = {
        invalidForm: true,
        formData: this.props.location.state ? this.props.location.state.service : null
    }

    formRef = React.createRef()

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleUpdateService(this.state.formData)
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

    renderEditServiceForm() {
        return (
            <div className="add-service-page">
                <div className="page-header">
                    <p className='page-title'>Edit Service :: </p>
                </div>
                <div className='add-service-form'>
                    <form 
                        ref={this.formRef} 
                        autoComplete="off" 
                        onSubmit={this.handleSubmit}
                    >
                        <div className='form-item'>
                            <label className='service-label'>Service Name :: </label>
                            <input
                                className="service-form"
                                name="name"
                                value={this.state.formData.name}
                                onChange={this.handleChange}
                                required
                            /> 
                        </div>
                        <div className='form-item'>
                            <label className='service-label'>Description of Service :: </label>
                            <textarea 
                                className="service-form description"
                                name="description"
                                value={this.state.formData.description}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className='form-item'>
                            <label className='service-label'>Exchange for Service :: </label>
                            <input 
                                className="service-form"
                                name="exchange"
                                value={this.state.formData.exchange}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className='form-item'>
                            <label className='service-label'>City, State :: </label>
                            <input 
                                className="service-form"
                                name="city"
                                value={this.state.formData.city}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className='form-item'>
                            <label className='service-label'>Contact Email :: </label>
                            <input 
                                className="service-form"
                                name="contactEmail"
                                value={this.state.formData.contactEmail}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className='form-item'>
                            <label className='service-label'>Categories of Service :: </label>
                            <Select
                                className='service-categories'
                                value={this.state.formData.categories}
                                isMulti
                                name="categories"
                                onChange={this.handleChangeCategories}
                                options={serviceCategories}
                                required
                            />
                        </div>
                        <div className='add-links'>
                            <Link className='cancel-button' to='/servicesfloor'>Cancel</Link>
                            <button
                                className="btn"
                                type="submit"
                                disabled={this.state.invalidForm}
                            >
                                Update Service
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    render() {
        return this.state.formData ? this.renderEditServiceForm() : <Redirect to='/marketplace' />;
    }
}

export default EditServicePage