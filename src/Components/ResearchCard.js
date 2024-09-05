// ResearchCard.js
import React, { useState } from 'react';
import './ResearchCard.css'; // Style the card

const ResearchCard = ({ title, subTitle, summary, referenceLink, moreDetails }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="research-card">
            <h2>{title}</h2>
            <h4>{subTitle}</h4>
            <p>{summary}</p>

            {showDetails && (
                <div className="research-details">
                    <p>{moreDetails}</p>
                </div>
            )}

            <div className="research-buttons">
                <button onClick={() => setShowDetails(!showDetails)}>
                    {showDetails ? "Show Less" : "Read More"}
                </button>
                <a href={referenceLink} target="_blank" rel="noopener noreferrer" className="btn-reference">Reference</a>
            </div>
        </div>
    );
};

export default ResearchCard;
