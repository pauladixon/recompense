import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Title.css'

class Title extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imgSrc: '/title1.png'
        }
        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
    }

    handleMouseOver() {
        this.setState({
            imgSrc: '/title2.png'
        })
    }

    handleMouseOut() {
        this.setState({
            imgSrc: '/title1.png'
        })
    }

    render() {
        return (
            <>
                <Link to=''>
                    <img 
                        onMouseOver={this.handleMouseOver} 
                        onMouseOut={this.handleMouseOut} 
                        src={this.state.imgSrc}
                        class="img-title"
                    />
                </Link>
            </>
        )
    }

}

export default Title