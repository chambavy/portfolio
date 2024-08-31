// About.js
import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="header-image">
        <img src="https://images.stockcake.com/public/5/4/3/5437492b-d14f-4ebc-b8f3-7818f22b27cc_large/studying-in-library-stockcake.jpg" alt="Friend's Name" />
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
