import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams() || {};
  
  const [project, setProject] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`/api/projects/${id}`);
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    if (id) {
      fetchProjectData();
    }
  }, [id]);

  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="images-container">
                {project.images && (
            Array.isArray(project.images) ? (
                project.images.map((image, index) => (
                <img
                    key={index}
                    src={image.url}
                    alt={`Project ${index + 1}`}
                    onClick={() => handleImageClick(image.url)}
                />
                ))
            ) : (
                <img
                src={project.images.url}
                alt={`Project 1`}
                onClick={() => handleImageClick(project.images.url)}
                />
            )
            )}
      </div>
      
      {modalImage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={modalImage} alt="" />
          </div>
        </div>
      )}

      <Link to="/projects" className="back-link">
        Вернуться к проектам
      </Link>
    </div>
  );
};

export default ProjectDetail;