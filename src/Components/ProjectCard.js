import React, { useState } from 'react';
import './ProjectCard.css'; // Make sure you have the corresponding CSS file

const ProjectCard = ({ title, description, imageUrl, projectDetails, githubLink }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleReadMore = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="project-card">
            <div className="project-card-content">
                <div className="project-image">
                    <img src={imageUrl} alt={`${title} image`} />
                </div>
                <div className="project-details">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    {showDetails && (
                        <div className="project-extra-details">
                            <p>{projectDetails}</p>
                        </div>
                    )}
                    <div className="project-buttons">
                        <button onClick={handleReadMore} className="btn">
                            {showDetails ? "Show Less" : "Read More"}
                        </button>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-github">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
