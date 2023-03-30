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
        {props.linkedin != null && <button type='button'><a href={props.linkedin}><img src='./ln-icon.png' /></a></button>}
        {props.twitter != null && <button type='button'><a href={props.twitter}><img src='./tw-icon.png' /></a></button>}
        {props.facebook != null && <button type='button'><a href={props.facebook}><img src='./fb-icon.png' /></a></button>}
        {props.instagram != null && <button type='button'><a href={props.instagram}><img src='./ig-icon.png' /></a></button>}

      </div>

    </div>
  )
}

export default TeamCard