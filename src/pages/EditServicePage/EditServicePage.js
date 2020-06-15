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
            <>
                <h1>Edit Service</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Categories</label>
                        <Select
                            value={this.state.formData.categories}
                            isMulti
                            name="categories"
                            onChange={this.handleChangeCategories}
                            options={serviceCategories}
                            required
                        />
                    </div>
                    <div className="form-group description-input-div">
                        <label>Description</label>
                        <input className="form-control"
                            name="description"
                            value={this.state.formData.description}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Exchange</label>
                        <input className="form-control"
                            name="price"
                            value={this.state.formData.exchange}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>City, State</label>
                        <input className="form-control"
                            name="city"
                            value={this.state.formData.city}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Service Contact Info</label>
                        <input className="form-control"
                            name="contactEmail"
                            value={this.state.formData.contactEmail}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button className="btn"
                        type="submit"
                        disabled={this.state.invalidForm}
                    >
                        Save Service
                    </button>&nbsp;&nbsp;
                    <Link to='/servicesfloor'>Cancel</Link>
                </form>
            </>
        )
    }

    render() {
        return this.state.formData ? this.renderEditServiceForm() : <Redirect to='/marketplace' />;
    }
}

export default EditServicePage