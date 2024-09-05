// ResearchPage.js
import React from 'react';
import "./Research.css";
import ResearchCard from '../Components/ResearchCard';
import researchData from '../Data/ResearchData';

const ResearchPage = () => {
  return (
    <div className="research-page">
      <div className="Research-image">
        <img src="https://img.freepik.com/free-photo/military-operations-control-room-used-following-global-threats_482257-90107.jpg?t=st=1725530495~exp=1725534095~hmac=c628170b91e9aefa141f3c24d416883cc0939ea32bf806b83cc605fa9eec72d0&w=1060" alt="Friend's Name" />
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
