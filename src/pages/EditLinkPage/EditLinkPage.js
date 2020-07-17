import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'


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


    renderEditLinkForm() {
        return (
            <div className="add-service-page">
                <div className="page-header">
                    <p className='page-title'>Edit Link :: </p>
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
                            <Link className='cancel-button' to='/directaidlinks'>Cancel</Link>
                            <button
                                className="btn"
                                type="submit"
                                disabled={this.state.invalidForm}
                            >
                                Update Direct Aid Link
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