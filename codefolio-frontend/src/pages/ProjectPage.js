import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectPage.css';

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/projects/');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="projectpage">
      <h1>Мои проекты</h1>
      <div className="project-list">
        {projects.map(project => (
          <div key={project.id} className="project">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Статус: {project.status}</p>
            <p>Технологии: 
              <div className="technologies">
                {project.technologies.map(tech => (
                  <div key={tech.id} className="technology">{tech.name}</div>
                ))}
              </div>
            </p>
            <p>Репозиторий: <a href={project.repository_link} target="_blank" rel="noopener noreferrer">{project.repository_link}</a></p>
            <p>Ссылка: <a href={project.live_link} target="_blank" rel="noopener noreferrer">{project.live_link}</a></p>
            {project.images.length > 0 && (
              <img src={`http://localhost:8000${project.images[0].image}`} alt={project.title} />
            )}
            <div className="project-link">
              <Link to={`/projects/${project.id}`}>
                Перейти к проекту
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;