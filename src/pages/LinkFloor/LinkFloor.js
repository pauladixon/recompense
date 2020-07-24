import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as linksAPI from '../../services/links-api'
import LinkFloorItems from '../../components/LinkFloorItems/LinkFloorItems'
// import LinkCitySearch from '../../components/LinkCitySearch/LinkCitySearch'
import LinkSearch from '../../components/LinkSearch/LinkSearch'
import './LinkFloor.css'


class LinkFloor extends Component {

    state={
      links: []
    }


  handleSearchCities = async (e, city) => {
    e.preventDefault()
    const links = this.props.links.filter(link => {
      if (link.cities[0].value.includes(city.value)) {
        return link.cities
      }
    })
    this.setState({links:links})
  }
  
  handleSearchCategories = async (e, category) => {
    e.preventDefault()
    const links = this.props.links.filter(link => {
      if (link.categories[0].value.includes(category.value)) {
        return link.categories
      }
    })
    this.setState({links:links})
  }

  handleLinkComponent() {
    if (this.state.filteredLinks.length === 0) {
      return this.props.links
    } else {
      return this.state.filteredLinks
    }
  }

  async componentDidMount() {
    const links = await linksAPI.getAll()
    this.setState({links})
  }
  render() {

    return (
      <div className="service-page">
        <div className="page-header">
          <p className='page-title'>Direct Aid Links to Assist BIPOC ::</p>
          <p className='justify'>This is a place for black and indigenous people to post payment platform handles and for non-black people to initiate direct peer-to-peer support for <span className='uppercase'>BIPOC</span> individuals in your online community.</p>
          <br></br>
          <Link className="add-service" to="/addlink">Post an Aid Link</Link>
          <br></br><br></br><br></br>
          {/* <LinkCitySearch
            cities={this.props.cities}
            handleSearchCities={this.handleSearchCities}
          /> */}
          <LinkSearch
                cities={this.props.cities}
                handleSearchCities={this.handleSearchCities}
          />
        </div>
        <div className="page-content">
              <LinkFloorItems 
                links={this.state.links} 
                cities={this.props.cities}
                />
        </div>
      </div>
    )
  }
  }
export default LinkFloor