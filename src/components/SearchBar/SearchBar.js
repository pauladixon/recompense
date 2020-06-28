import React, { Component } from 'react'
import Select from 'react-select'
import './SearchBar.css'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#3c0c15' : '#e3dbc9',
    color: state.isSelected ? 'white' : '#3c0c15',
  }),
  control: () => ({
    width: 150,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

class SearchBar extends Component {

    state = {
        formData: {
            city: '',
            category: ''
        }
    }
    
    handleChangeCity = city => {
        this.setState({ formData: { ...this.state.formData, city } })
    }

    handleChangeCategory = category => {
        this.setState({ formData: { ...this.state.formData, category } })
    }

    render() {
        return (
            <div className="search-bar">
                <div className='search-item'>
                    <form 
                        autoComplete="off" 
                        onSubmit={this.props.handleSearchCities}
                    >
                        <label className='search-label'>Search By Location :: </label>
                        <div className='search-row'>
                            <Select
                                className='search-select'
                                value={this.state.formData.city}
                                name="cities"
                                styles={customStyles}
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
                <br></br><br></br><br></br>
                <div className='search-item'>
                    <form  
                        autoComplete="off" 
                        onSubmit={this.props.handleSearchCategories}
                    >
                        <label className='search-label'>Search By Category :: </label>
                        <div className='search-row'>
                            <Select
                                className='search-select'
                                value={this.state.formData.category}
                                name="categories"
                                styles={customStyles}
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