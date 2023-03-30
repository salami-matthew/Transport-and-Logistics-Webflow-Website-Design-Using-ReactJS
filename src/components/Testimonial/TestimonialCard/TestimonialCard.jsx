import React from 'react'
import "./TestimonialCard.css"

const TestimonialCard = (props) => {

  const liteStyle = {
    background: "#F4F4F4",
    color: "#666C89"
  }
  const darkStyle = {
    background: "#091242",
    color: "#FFFFFF"
  }

  return (
    <div className='card-container' style={props.type === "dark" ? darkStyle : liteStyle}>
      <div className='card-content'>
        <div className='avatar-info'>
          <div>
            <img src={props.img} />
            <div className={props.type === "dark" ? "text-dark" : "text-lite"}>
              <h5>{props.name}</h5>
              <h6>{props.title}</h6>
            </div>
          </div>

          <img src="./quote.png" />
        </div>

        <p>{props.info}</p>
        <img src='./five-star.png' />
      </div>
    </div>
  )
}

export default TestimonialCard