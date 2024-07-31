import React from "react";
import Links from "./Links"; // Make sure this is imported if you want to use it

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>} {/* Render bio if it exists */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} /> {/* Render Links component with props */}
    </div>
  );
}

export default About;
