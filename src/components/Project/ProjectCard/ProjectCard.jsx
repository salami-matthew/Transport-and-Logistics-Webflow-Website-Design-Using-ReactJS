import React from 'react'
import "./ProjectCard.css"

const ProjectCard = (props) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${props.img})`,
    backgroundSize: "cover"
  }

  return (
    <div className='project-card' style={backgroundImageStyle}>
      <div className='card-info'>
        <h1>{props.heading}</h1>
        <h3>{props.subHeading}</h3>
      </div>

    </div>
  )
}

export default ProjectCard