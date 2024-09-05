// ProjectsPage.js
import React from 'react';
import "./Projects.css"; // Import the CSS file
import ProjectCard from '../Components/ProjectCard';
import projectData from '../Data/ProjetData';

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="projects-image">
        <img src="https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Friend's Name" />
        <div className="overlay-text">
          <h1>Portfolio</h1>
          <p>
          My public ML portfolio includes projects on different topics, including generative AI, NLP, computer vision, and tabular data. To see more of my work, visit my GitHub page, download my <a href="link-to-cv.pdf">CV</a> or check out the <a href="/">about</a> page.
          </p>
        </div>
      </div>
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          githubLink={project.githubLink}
          //projectDetails
          projectDetails={project.projectDetails}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;
