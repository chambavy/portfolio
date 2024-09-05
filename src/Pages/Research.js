// ResearchPage.js
import React from 'react';
import "./Research.css";
import ResearchCard from '../Components/ResearchCard';
import researchData from '../Data/ResearchData';

const ResearchPage = () => {
  return (
    <div className="research-page">
      <div className="Research-image">
        <img src="https://images.pexels.com/photos/27277185/pexels-photo-27277185/free-photo-of-3d.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Friend's Name" />
        <div className="overlay-text">
        <h1>My Research Work</h1>
          <p>
          My Research works spans over different topics, including generative AI, NLP, computer vision, and tabular data. To see more of my work, visit my GitHub page, download my <a href="link-to-cv.pdf">CV</a> or check out the <a href="/">about</a> page.
          </p>
        </div>
      </div>
      <div className="research-list">
        {researchData.map((research, index) => (
          <ResearchCard
            key={index}
            title={research.title}
            subTitle={research.subTitle}
            summary={research.summary}
            referenceLink={research.referenceLink}
            moreDetails={research.moreDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default ResearchPage;
