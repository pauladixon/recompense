import React from 'react'
import { useSpring, animated } from 'react-spring'
import './ContactPage.css'
import Footer from '../../components/Footer/Footer'
import { SocialIcon } from 'react-social-icons'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const translate1 = (x, y) => `translate3d(${x / 5}px,${y / 5}px,0)`
const translate2 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`


const ContactPage = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 150, friction: 140 } }))


    return (
        <div className="contact-home">


            <div class="Home"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
                onMouseClick={() => set({ xy: [0, 0] })}
            >


                <animated.div class="contact-card1" style={{ transform: props.xy.interpolate(translate1) }} />
    
                <animated.div class="contact-card4" style={{ transform: props.xy.interpolate(translate1) }} />
               
                <animated.div
                    class="contact-card2"
                    style={{ transform: props.xy.interpolate(translate2) }}
                    onMouseOver={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
                    onMouseClick={() => set({ xy: [0, 0] })}
                >
                    <div className="contact-p">
                        <p className="contact-title">We're both fullstack developers, to see the rest of our work or contact us individually, check out our links below.</p>
                        <div className="isa">
                            <p className="dev-name">Isa:</p>
                            <p>is focused on tools that foster communication; with an emphasis on the synthesis of art and tech</p>
                            <SocialIcon
                                style={{ height: 45, width: 45 }}
                                bgColor="none"
                                fgColor='black'
                                url="https://www.linkedin.com/in/isa-sofia-martinez/"
                            />
                            <SocialIcon
                                style={{ height: 45, width: 45 }}
                                bgColor="none"
                                fgColor='black'
                                url="http://isasofiamartinez.com/"
                            />
                        </div>
                        <div className="paula">
                            <p className="dev-name">Paula:</p>
                            <p>is focused on accessibility through technology; with an emphasis on the digitization of self help and spiritual tools.</p>
                            <SocialIcon
                                style={{ height: 45, width: 45 }}
                                bgColor="none"
                                fgColor='black'
                                url="https://www.linkedin.com/in/paulapdixon/"
                            />
                            <SocialIcon
                                style={{ height: 45, width: 45 }}
                                bgColor="none"
                                fgColor='black'
                                url="https://pauladixon.software/"
                            />
                            <SocialIcon
                                style={{ height: 45, width: 45 }}
                                bgColor="none"
                                fgColor='black'
                                url="https://www.instagram.com/paula__dixon/"
                            />
                        </div>
                        <div className="email-div">
                            <p>For concerns or issues on the site, email us at recompensce@gmail.com</p>
                        </div>
                    </div>
                 
                </animated.div>
        
                <animated.div class="contact-card3" style={{ transform: props.xy.interpolate(translate2) }} />
                
            
              

            </div>

            <div className="mobile-contact">
            <div className="mobile-contact-p">
                        <p className="contact-title">We're both fullstack developers, to see the rest of our work or contact us individually, check out our links below.</p>
                        <div className="isa">
                            <p className="dev-name">Isa:</p>
                            <p>is focused on tools that foster communication; with an emphasis on the synthesis of art and tech</p>
                            <SocialIcon
                                style={{ height: 45, width: 45 }}
                                bgColor="none"
                                fgColor='black'
                                url="https://www.linkedin.com/in/isa-sofia-martinez/"
                            />
                            <SocialIcon
                                style={{ height: 45, width: 45 }}
                                bgColor="none"
                                fgColor='black'
                                url="https://isasofiamartinez.com/"
                            />
                        </div>
                        <div className="paula">
                            <p className="dev-name">Paula:</p>
                            <p>is focused on accessibility through technology; with an emphasis on the digitization of self help and spiritual tools.</p>
                            <SocialIcon
                                style={{ height: 45, width: 45 }}
                                bgColor="none"
                                fgColor='black'
                                url="https://www.linkedin.com/in/paulapdixon/"
                            />
                            <SocialIcon
                                style={{ height: 45, width: 45 }}
                                bgColor="none"
                                fgColor='black'
                                url="https://pauladixon.software/"
                            />
                            <SocialIcon
                                style={{ height: 45, width: 45 }}
                                bgColor="none"
                                fgColor='black'
                                url="https://www.instagram.com/paula__dixon/"
                            />
                        </div>
                        <div className="email-div">
                            <p>For concerns or issues on the site, email us at recompensce@gmail.com</p>
                        </div>
                    </div>
            </div>
            <footer>
                <Footer />
            </footer>


        </div>

    )
}

export default ContactPage