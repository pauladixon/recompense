import React, { Component } from 'react'
import './RequestItems.css'
import RequestItem from '../../components/RequestItem/RequestItem'

class RequestItems extends Component {

    render() {
        return (
            <>
              <div className="posts">
                  {this.props.requests.map(request =>
                    <RequestItem 
                      request={request} 
                      key={request._id}
                    />
                  )}
              </div> 
            </>
        )
    }
}

export default RequestItems