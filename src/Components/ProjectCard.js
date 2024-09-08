// ProjectCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ id, title, description, imageUrl, githubLink }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/project/${id}`);
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
          <div className="project-buttons">
            <button onClick={handleReadMore} className="btn">Read More</button>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-github">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
