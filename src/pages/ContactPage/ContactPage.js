import React, { Component } from 'react'
import './ContactPage.css'
import Footer from '../../components/Footer/Footer'
import { SocialIcon } from 'react-social-icons'

class ContactPage extends Component {


    render() {
        return (
            <div className="Home">

                <div className="contact-border-2 x">
                    <div className="contact-page">
                        <p className="contact-title">To see the rest of our work or contact us individually, check out our links below.</p>
                        <div className="isa">
                            <p className="dev-name">Isa:</p>
                            <p>A fullstack dev focused on tools that foster communication; with an emphasis on the synthesis of art and tech</p>
                            <SocialIcon
                                style={{ height: 45, width: 45 }}
                                bgColor="#FFF4DE"
                                fgColor='black'
                                url="https://www.linkedin.com/in/isa-sofia-martinez/"
                            />
                            <SocialIcon
                                style={{ height: 45, width: 45 }}
                                bgColor="#FFF4DE"
                                fgColor='black'
                                url="https://isasofiamartinez.com/"
                            />
                        </div>
                        <div className="paula">
                            <p className="dev-name">Paula:</p>
                            <SocialIcon

                                style={{ height: 45, width: 45 }}
                                bgColor="#FFF4DE"
                                fgColor='black'
                                url="https://www.linkedin.com/in/isa-sofia-martinez/"
                            />
                            <SocialIcon
                                style={{ height: 45, width: 45 }}
                                bgColor="#FFF4DE"
                                fgColor='black'
                                url="https://isasofiamartinez.com/"
                            />
                        </div>
                        <div className="email-div">
                            <p>For concerns or issues on the site, email us </p>
                            <p className="email"> here</p>
                        </div>
                    </div>
                </div>
                <div className="contact-border-1 y">
                    <div className="contact-border-3 z">
                        <div className="contact-border-4 y">
                        </div>
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}
export default ContactPage