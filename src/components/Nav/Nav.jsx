import React from "react";
import "./Nav.css"

export default function Nav() {
  return (
    <nav>
      <div className="menu-container">
        <div className="main-menu">
          <div className="main-nav-links">

            <div className="line"><a href="#">Home</a></div>
            <hr className="nav-div" />

            <div className="line"><a href="#about">About</a></div>
            <hr className="nav-div" />

            <div className="line"><a href="#">Pages
              <img className="dropdown-img" src="./drop-down.png" />
            </a></div>
            <hr className="nav-div" />

            <div className="line"><a href="#project">Project</a></div>
            <hr className="nav-div" />

            <div className="line"><a href="#contact">Contact</a></div>
          </div>

        </div>

        <div className="contact-links">
          <img src="Instagram.png" alt="Instagram-img" />
          <img src="Facebook.png" alt="Facebook-img" />
          <img src="Twitter.png" alt="logo-img" />
          <img src="Linkdin.png" alt="Linkdin-img" />
          <button className="nav-btn"><span>Request Quote</span></button>
        </div>
      </div>
    </nav>
  )
}

