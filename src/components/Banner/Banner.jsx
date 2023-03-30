import React from "react";
import "./Banner.css"
import Nav from "../Nav/Nav";
import Highlight from "../Highlight/Highlight";
import MoreButton from "../MoreButton/MoreButton";

export default function Banner() {
  return <div className="banner">
    <Nav />
    <section>
      <Highlight
        info="Logistics & Supply Chain Solutions"
        type="dark"
      />
      <h1>Your Gateway
        to any Destination in the World</h1>
      <p>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </p>
      <MoreButton
        text="Explore More"
      />
    </section>
  </div>
}