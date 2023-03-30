import React from "react";
import "./Services.css";
import Highlight from "../Highlight/Highlight";
import ServiceContent from "./ServiceContent/ServiceContent";

const Services = () => {
  return (
    <div className="white-container">
      <div className="services-section">
        <div className="heading">
          <Highlight info="What We Do" />
          <h1 className="display-text">Safe & Reliable Cargo Solutions</h1>
        </div>
        <div className="content">
          <div className="top-section">
            <ServiceContent
              img="./ship-icon.png"
              heading="Sea Transport Services"
              content="Following the quality of our service thus having gained trust of our many clients."
            />
            <ServiceContent
              img="./warehouse-icon.png"
              heading="Warehousing Services"
              content="Following the quality of our service thus having gained trust of our many clients."
            />
          </div>
          <div className="bottom-section">
            <ServiceContent
              img="./plane-icon.png"
              heading="Air Fright Services"
              content="Following the quality of our service thus having gained trust of our many clients."
            />
            <ServiceContent
              img="./bus-icon.png"
              heading="Local Shipping Services"
              content="Following the quality of our service thus having gained trust of our many clients."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services