import React, { Component } from 'react'
import './LinkFloorItems.css'
import LinkFloorItem from '../../components/LinkFloorItem/LinkFloorItem'

class LinkFloorItems extends Component {

    render() {
        return (
            <>
              <div className="posts">
                  {this.props.links.map(link =>
                    <LinkFloorItem 
                      link={link} 
                      key={link._id}
                    />
                  )}
              </div> 
            </>
        )
    }
}

export default LinkFloorItems