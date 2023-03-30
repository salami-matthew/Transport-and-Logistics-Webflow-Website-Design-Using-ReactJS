import React from 'react'
import "./MoreButton.css"

const MoreButton = (props) => {
  return (
    <div className="btn-background">
      <button className={props.type === "dark" ? "banner-btn-dark" : "banner-btn"} type="button">
        <div
          className={props.type === "dark" ? "dark" : ""}></div>{props.text}
      </button>
    </div>
  )
}

export default MoreButton