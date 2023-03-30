import React from 'react'
import "./Highlight.css"

const Highlight = (props) => {
  const dark = "highlight-dark";
  const lite = "highlight";

  return (
    <div className={props.type === "dark" ? dark : lite}>
      <div className="pattern"></div>
      <span>{props.info}</span>
    </div>
  )
}

export default Highlight