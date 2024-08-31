import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'Description of Project 1', link: '#' },
    { title: 'Project 2', description: 'Description of Project 2', link: '#' },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
