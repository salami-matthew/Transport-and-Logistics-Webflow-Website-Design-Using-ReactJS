import React from 'react'
import Highlight from '../Highlight/Highlight'
import "./Testimonial.css"
import TestimonialCard from './TestimonialCard/TestimonialCard'

const Testimonial = () => {
  return (
    <div className='white-container'>
      <div className='testimonial-section'>
        <div className='upper-section'>
          <span><Highlight info="Testimonial" />
            <h3 className='display-text'>What Our Customers Say</h3></span>
          <img src='./arrow.png' />
        </div>
        <div className='testimonial-cards'>
          <TestimonialCard
            name="Kathleen Smith"
            title="Fuel Company"
            img="./User1.png"
            info="Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
          />

          <TestimonialCard
            name="John Martin"
            title="Restoration Company"
            img="./User2.png"
            type="dark"
            info="Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
          />
        </div>
      </div>

    </div>
  )
}

export default Testimonial