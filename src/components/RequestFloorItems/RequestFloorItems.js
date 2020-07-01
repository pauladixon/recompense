import React, { Component } from 'react'
import RequestFloorItem from '../../components/RequestFloorItem/RequestFloorItem'

class RequestFloorItems extends Component {

    render() {
        return (
            <>
              <div className="posts">
                  {this.props.requests.map(request =>
                    <RequestFloorItem 
                      request={request} 
                      key={request._id}
                    />
                  )}
              </div> 
            </>
        )
    }
}

export default RequestFloorItems