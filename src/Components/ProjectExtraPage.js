// ProjectExtraPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import projectExtraData from '../Data/ProjecExtraData';
import './ProjectExtraPage.css';

const ProjectExtraPage = () => {
  const { id } = useParams();
  const project = projectExtraData.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-extra-page">
      <h1>{project.title}</h1>
      <h2>{project.subTitle}</h2>
      <div className="extra-content">
        <p>{project.details}</p>
        {project.image && (
          <div className="video">
            <iframe src={project.image} title="Project Image" allowFullScreen></iframe>
          </div>
        )}
        {project.videoUrl && (
          <div className="video">
            <iframe src={project.videoUrl} title="Project Video" allowFullScreen></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectExtraPage;
