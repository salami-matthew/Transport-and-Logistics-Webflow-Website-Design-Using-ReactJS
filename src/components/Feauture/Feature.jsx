import React from 'react'
import "./Feature.css"

const Feature = (props) => {
  return (
    <div className='bottom-text-icon'>
      <img src={props.img} />
      <h3 className='feature-text'>{props.text}</h3>
    </div>
  )
}

export default Feature