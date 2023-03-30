import React from 'react'
import "./Team.css"
import Highlight from "../Highlight/Highlight"
import TeamCard from './TeamCard/TeamCard'

const Team = () => {

  return (
    <div className='white-container'>
      <div className='team-container'>
        <Highlight info="The Transporters" />
        <h1 className='display-text'>Meet Expert Team</h1>
        <div className='cards'>
          <TeamCard
            img="./team-img1.png"
            heading="Jessca Arow"
            subHeading="Designer"
          />
          <TeamCard
            img="./team-img2.png"
            heading="Kathleen Smith"
            subHeading="Designer"
          />
          <TeamCard
            img="./team-img3.png"
            heading="Rebecca Tylor"
            subHeading="Designer"
          />
        </div>
      </div>
    </div>


  )
}

export default Team