import React, { Component } from 'react'
import Select from 'react-select'
import './SearchBar.css'

class SearchBar extends Component {

    state = {
        formData: {
            city: '',
            categories: ''
        }
    }


    handleChangeCategories = categories => {
        this.setState({ categories })
    }

    handleChangeCities = cities => {
        this.setState({ cities })
    }

    handleSubmitCities = e => {
      e.preventDefault()
      this.props.handleSearchCities(this.state.formData)
    }

    handleSubmitCategories = e => {
        e.preventDefault()
        this.props.handleSearchCategories(this.state.formData)
      }

    render() {
        return (
            <div className="search-bar">
                <div className='search-item'>
                    <form 
                        autoComplete="off" 
                        onSubmit={this.handleSubmitCities}
                    >
                        <label className='search-label'>Search By City :: </label>
                        <div className='search-row'>
                            <Select
                                className='search-select'
                                value={this.state.formData.cities}
                                name="cities"
                                isMulti
                                onChange={this.handleChangeCities}
                                options={this.props.cities}
                                required
                            />
                            <button
                                className="search-btn"
                                type="submit"
                                onClick={this.props.handleSearchCities}
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
                        onSubmit={this.handleSubmitCategories}
                    >
                        <label className='search-label'>Search By Category :: </label>
                        <div className='search-row'>
                            <Select
                                className='search-select'
                                value={this.state.formData.categories}
                                name="categories"
                                isMulti
                                onChange={this.handleChangeCategories}
                                options={this.props.categories}
                                required
                            />
                            <button
                                className="search-btn"
                                type="submit"
                                onClick={this.props.handleSearchCities}
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