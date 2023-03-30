import React from 'react'
import "./TeamCard.css"

const TeamCard = (props) => {

  return (
    <div className='team-card'>
      <img src={props.img} />
      <div className='info'>
        <h1>{props.heading}</h1>
        <h3>{props.subHeading}</h3>
      </div>

      <div className='social-media'>
        <button type='button'><a><img src='./ln-icon.png' /></a></button>
        <button type='button'><a><img src='./tw-icon.png' /></a></button>
        <button type='button'><a><img src='./fb-icon.png' /></a></button>
        <button type='button'><a><img src='./ig-icon.png' /></a></button>
      </div>

    </div>
  )
}

export default TeamCard