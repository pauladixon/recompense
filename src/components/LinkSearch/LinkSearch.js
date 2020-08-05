import React, { Component } from 'react'
import Select from 'react-select'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#3c0c15' : '#e3dbc9',
    color: state.isSelected ? 'white' : '#3c0c15',
  }),
  control: () => ({
    width: 120,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

class LinkSearch extends Component {

    state = {
        formData: {
            city: ''
        }
    }
    
    handleChangeCity = city => {
        this.setState({ formData: { ...this.state.formData, city } })
    }

    handleRefreshPage = () => {
        window.location.reload(false)
    }

    componentDidUpdate() {
        if (this.props.onChange) {
            this.props.onChange(this.state)
        }
    }

    render() {
        return (
            <>
                <div className='search-button'>
                    <button
                        className="refresh-btn web-erase"
                        type="submit"
                        name='refresh'
                        onClick={this.handleRefreshPage}
                    >
                        Reset Search Filters
                    </button>
                </div>
                <div className="search-bar">
                    <div className='search-item'>
                        <label className='search-label'>Search by Location :: </label>
                        <div className='search-row'>
                            <Select
                                className='search-select'
                                value={this.state.formData.city}
                                styles={customStyles}
                                onChange={this.handleChangeCity}
                                options={this.props.cities}
                                required
                            />
                            <button
                                className="search-btn"
                                type="submit"
                                name={this.state.formData.city}
                                onClick={(e) => this.props.handleSearchCities(e, this.state.formData.city)}
                            >
                                →
                            </button>
                        </div>
                    </div>
                    <br></br>
                    <button
                        className="refresh-btn mobile-erase"
                        type="submit"
                        name='refresh'
                        onClick={this.handleRefreshPage}
                    >
                        Reset Search Filters
                    </button>
                </div>
            </>
          )
    }
}

export default LinkSearch
