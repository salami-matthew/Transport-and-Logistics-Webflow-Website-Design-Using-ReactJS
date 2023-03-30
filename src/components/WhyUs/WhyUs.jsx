import React from 'react'
import Feature from '../Feauture/Feature'
import "./WhyUs.css"
import Highlight from '../Highlight/Highlight'

const WhyUs = () => {
  return (
    <section className='why-us-container'>
      <div className='why-us-section'>
        <div className='left-section'>
          <img src='./whyus-tag.png' />
        </div>
        <div className='right-section'>
          <div className='text-section'>
            <Highlight info="Why Choose" />
            <h1 className='display-text'>We create opportunity to reach potential</h1>
            <p className='why-info'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
          </div>
          <div className='features-section'>
            <div className='left-features'>
              <Feature
                img="./pkg-icon.png"
                text="Safe Package"
              />
              <Feature
                img="./globe-icon.png"
                text="Global Tracking"
              />
              <Feature
                img="./time-icon.png"
                text="In Time Delivery"
              />
            </div>
            <div className='right-features'>
              <Feature
                img="./shipfeat-icon.png"
                text="Ship Everywhere"
              />
              <Feature
                img="./support-icon.png"
                text="24/7 Support"
              />
              <Feature
                img="./coin-icon.png"
                text="Transparent Pricing"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs