import React from "react";
import AddressItem from "../AddressItem/AddressItem";
import "./Header.css"

export default function Header() {
  return (
    <header>
      <div className="logo-header">
        <div>
          <img src="Logo.png" alt="logo-img" />
        </div>

        <div className="address-bar">
          <AddressItem
            img="clock-icon.png"
            heading="Mon - Sat 9.00 - 18.00"
            subheading="Sunday Closed"
          />
          <AddressItem
            img="email-icon.png"
            heading="Email"
            subheading="contact@logistics.com"
          />
          <AddressItem
            img="call-icon.png"
            heading="Call Us"
            subheading="(00) 112 365 489"
          />
        </div>
      </div>
    </header>
  )
}
