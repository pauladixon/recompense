import React, { Component } from 'react'
import Select from 'react-select'
import './SearchBar.css'

class SearchBar extends Component {

    state = {
        formData: {
            city: '',
            category: ''
        }
    }

    handleSubmitCity = e => {
        e.preventDefault()
        this.props.handleSearchCities(this.state.formData)
        console.log('🏙', this.state.formData)
    }

    handleSubmitCategory = e => {
        e.preventDefault()
        this.props.handleSearchCategories(this.state.formData)
    }

    handleChangeCategory = category => {
        this.setState({ formData: { ...this.state.formData, category } })
    }
    
    handleChangeCity = city => {
        this.setState({ formData: { ...this.state.formData, city } })
    }

    render() {
        return (
            <div className="search-bar">
                <div className='search-item'>
                    <form 
                        autoComplete="off" 
                        onSubmit={this.handleSubmitCity}
                    >
                        <label className='search-label'>Search By City :: </label>
                        <div className='search-row'>
                            <Select
                                className='search-select'
                                value={this.state.formData.city}
                                name="cities"
                                onChange={this.handleChangeCity}
                                options={this.props.cities}
                                required
                            />
                            <button
                                className="search-btn"
                                type="submit"
                            >
                                →
                            </button>
                        </div>
                    </form>
                </div>
                <br></br><br></br>
                <div className='search-item'>
                    <form  
                        autoComplete="off" 
                        onSubmit={this.handleSubmitCategory}
                    >
                        <label className='search-label'>Search By Category :: </label>
                        <div className='search-row'>
                            <Select
                                className='search-select'
                                value={this.state.formData.category}
                                name="categories"
                                onChange={this.handleChangeCategory}
                                options={this.props.categories}
                                required
                            />
                            <button
                                className="search-btn"
                                type="submit"
                            >
                                →
                            </button>
                        </div>
                    </form>
                </div>
            </div>
          )
    }
}

export default SearchBar