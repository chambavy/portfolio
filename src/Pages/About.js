// About.js
import React from "react";
import "./About.css"; // Import the CSS file


const About = () => {

  return (
    <div className="about-container">
      <div className="header-image">
        <img src="https://media.licdn.com/dms/image/v2/C5103AQH1sxzSTGmRiA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1564073675035?e=1730937600&v=beta&t=u_W2jaqdaI22VScN4Y-l8Q3Tt4BihKq6vGzrlV611c4" alt="profile" />
        <div className="overlay-text">
          <h1>Hi, I am Arunn!</h1>
          <p>
            Click <a href="link-to-cv.pdf">here</a> to download my CV and check out my <a href="/projects">portfolio</a> to see my work.
          </p>
        </div>
      </div>
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          Your  bio goes here. Talk about their background, skills, interests, and what makes them unique.
          Abilities or he perfectly pretended so strangers be exquisite. Oh to another chamber pleased imagine do in. Went me rank at last loud shot an draw. Excellent so to no sincerity smallness. Removal request delight if on he we. Unaffected in we by apartments astonished to decisively themselves. Offended ten old consider speaking.
          Abilities or he perfectly pretended so strangers be exquisite. Oh to another chamber pleased imagine do in. Went me rank at last loud shot an draw. Excellent so to no sincerity smallness. Removal request delight if on he we. Unaffected in we by apartments astonished to decisively themselves. Offended ten old consider speaking.

        </p>
      </div>
      
    </div>
  );
};

export default About;
