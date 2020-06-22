import React, { Component } from 'react'
import Select from 'react-select'
import serviceCategories from '../../category-data'
import serviceCities from '../../city-data'
import './SearchBar.css'

class SearchBar extends Component {

    state = {
        formData: {
            city: '',
            categories: ''
        }
    }

    formRef = React.createRef()

    handleChangeCategories = categories => {
        this.setState({ formData: { ...this.state.formData, categories } })
    }

    handleChangeCities = cities => {
        this.setState({ formData: { ...this.state.formData, cities } })
    }

    handleSubmit = e => {
      e.preventDefault()
      this.props.handleSearch(this.state.formData)
    }

    render() {
        return (
            <div className="search-bar">
                <div className='search-item'>
                    <form 
                        ref={this.formRef} 
                        autoComplete="off" 
                        onSubmit={this.handleSubmit}
                    >
                        <label className='search-label'>Search By City :: </label>
                        <div className='search-row'>
                            <Select
                                className='search-select'
                                value={this.state.formData.cities}
                                name="cities"
                                isMulti
                                onChange={this.handleChangeCities}
                                options={serviceCities}
                                required
                            />
                            <button
                                className="search-btn"
                                type="submit"
                                onClick={this.props.handleSearch}
                            >
                                →
                            </button>
                        </div>
                    </form>
                </div>
                <br></br><br></br>
                <div className='search-item'>
                    <form 
                        ref={this.formRef} 
                        autoComplete="off" 
                        onSubmit={this.handleSubmit}
                    >
                        <label className='search-label'>Search By Category :: </label>
                        <div className='search-row'>
                            <Select
                                className='search-select'
                                value={this.state.formData.categories}
                                name="categories"
                                isMulti
                                onChange={this.handleChangeCategories}
                                options={serviceCategories}
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