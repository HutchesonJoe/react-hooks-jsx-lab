import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id = "about">
    <h2>About Me</h2>
    <p>I'm the kind of person who thinks a coding bootcamp is a brilliant get-rich-quick scheme.</p>
    <img src={image} alt="I made this"></img>
  </div>);
}

export default About;
