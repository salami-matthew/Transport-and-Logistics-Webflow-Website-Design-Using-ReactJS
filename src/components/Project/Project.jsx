import React from 'react'
import MoreButton from '../MoreButton/MoreButton'
import "./Project.css"
import ProjectCard from './ProjectCard/ProjectCard'

const Project = () => {
  return (
    <section id='project' className='project-container'>
      <h1 className='display-text'>Transporting Across The World</h1>
      <div className='project-content'>
        <ProjectCard
          img='./project-card-img1.png'
          heading="Liquid Transportation"
          subHeading="Premium Tankers"
        />
        <ProjectCard
          img='./project-card-img2.png'
          heading="Packaging Solutions"
          subHeading="Warehouse Management"
        />
        <ProjectCard
          img='./project-card-img3.png'
          heading="Contract Logistics"
          subHeading="Road Transportation"
        />
        <ProjectCard
          img='./project-card-img4.png'
          heading="Warehouse & Distribution"
          subHeading="Large Warehouse"
        />
        <ProjectCard
          img='./project-card-img5.png'
          heading="Specialized Transport"
          subHeading="Ocean Transports"
        />

      </div>
      <MoreButton text="More Work" type="dark" />
    </section>
  )
}

export default Project