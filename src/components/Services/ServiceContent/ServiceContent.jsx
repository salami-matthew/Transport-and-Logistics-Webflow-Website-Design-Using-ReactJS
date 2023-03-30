import React from 'react'
import "./ServiceContent.css"

const ServiceContent = (props) => {
  return (
    <div className='services-content'>
      <img src={props.img} />
      <hr />
      <div className='info'><h3>{props.heading}</h3>
        <p>{props.content}</p></div>

    </div>
  )
}

export default ServiceContent