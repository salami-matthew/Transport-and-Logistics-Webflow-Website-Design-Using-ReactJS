import React from 'react'
import "./About.css"
import Highlight from "../Highlight/Highlight"
import Feature from '../Feauture/Feature'

const About = () => {
  return (
    <section id='about' className="about-container">
      <div className='about-padding'>
        <div className='about-content'>
          <div className='text-section'>
            <Highlight info="Why Us" />
            <h1 className='display-text'>We provide full range global logistics solution</h1>
            <div>
              <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
              <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
            </div>


            <div className='bottom-text-section'>
              <Feature
                img="./delivery-icon.png"
                text="Delivery on Time"
              />
              <Feature
                img="./cost-icon.png"
                text="Optimized Travel Cost"
              />
            </div>
          </div>
        </div>

      </div>
      <div className='counter'>
        <div className='left-counter'>
          <h1 className='display-text'>
            1294
          </h1>
          <div className='counter-pattern'></div>
          <p>Delivered Packages</p>
        </div>
        <div className='right-counter'>
          <h1 className='display-text'>
            3594
          </h1>
          <div className='counter-pattern'></div>
          <p>Satisfied Clients</p>
        </div>

      </div>
    </section>
  )
}

export default About