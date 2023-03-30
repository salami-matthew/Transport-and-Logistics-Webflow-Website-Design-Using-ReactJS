import React from 'react'
import "./AddressItem.css"

const AddressItem = (props) => {
  return (
    <div className="address-item">
      <img src={props.img} />
      <p>
        <span>{props.heading}</span>
        <span>{props.subheading}</span>
      </p>
    </div>
  )
}

export default AddressItem