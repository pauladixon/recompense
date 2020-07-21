import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Home.css'
import Footer from '../../components/Footer/Footer'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const translate1 = (x, y) => `translate3d(${x / 5}px,${y / 5}px,0)`
const translate2 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const Home = () => {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 150, friction: 140 } }))
  return (
    <div>
      <div class="Home" 
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        onMouseClick={() => set({ xy: [0, 0] })}
      >
        <animated.div class="card1" style={{ transform: props.xy.interpolate(translate1) }} />
        <animated.div 
          class="card2" 
          style={{ transform: props.xy.interpolate(translate2) }} 
          onMouseOver={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
          onMouseClick={() => set({ xy: [0, 0] })}
        >
          <div className="home-p">
            <p><span className='page-title'>Recompense</span> :: as a verb, means to make amends for loss or harm suffered; to compensate.</p>
            <p>Recompense is a community driven application for paying reparations to <span className='uppercase'>BIPOC</span>. Users can post services to offer, make service requests, and donate to individuals in need. In the ongoing effort to redistribute resources and care, we hope this application will help further the task of connecting individuals to resources that they need, and the resources that individuals can provide to others.</p>
            <p>Included <a className="doc-link" href="http://pfw.guide/" target="_blank" rel="noopener noreferrer">here</a> is a link to the master list of resources compiled by Patia's Fantasy World for the continued support of the Black Lives Matter movement outside of our site.</p>
          </div>
        </animated.div>
        <animated.div class="card3" style={{ transform: props.xy.interpolate(translate2) }} />
      </div>
      <footer>
          <Footer/>
      </footer>
    </div>
  )
}
export default Home