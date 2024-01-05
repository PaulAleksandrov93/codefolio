import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams() || {};

  const [project, setProject] = useState(null);
  const [modalImages, setModalImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`/api/projects/${id}`);
        const data = await response.json();
        setProject(data);

        // Set modal images only if project has images
        if (data.images && data.images.length > 1) {
          setModalImages(data.images.map(image => `http://localhost:8000${image.image}`));
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    if (id) {
      fetchProjectData();
    }
  }, [id]);

  const handleImageClick = (imageUrl, index) => {
    setModalImages(project.images.map(image => `http://localhost:8000${image.image}`));
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImages([]);
    setIsModalOpen(false);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((currentImageIndex + modalImages.length - 1) % modalImages.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % modalImages.length);
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>Статус: {project.status}</p>
      <p>
        Технологии:
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <div key={index} className="technology">
              {tech.name}
            </div>
          ))}
        </div>
      </p>
      <p>
        Репозиторий: <a href={project.repository_link} target="_blank" rel="noopener noreferrer">{project.repository_link}</a>
      </p>
      <p>
        Ссылка: <a href={project.live_link} target="_blank" rel="noopener noreferrer">{project.live_link}</a>
      </p>
      <div className="images-container">
        {project.images && (
          <>
            {Array.isArray(project.images) ? (
              project.images.map((image, index) => (
                <img
                  key={index}
                  src={`http://localhost:8000${image.image}`}
                  alt={`Project ${index + 1}`}
                  onClick={() => handleImageClick(`http://localhost:8000${image.image}`, index)}
                />
              ))
            ) : (
              <img
                src={`http://localhost:8000${project.images[0].image}`}
                alt={`Project 1`}
                onClick={() => handleImageClick(`http://localhost:8000${project.images[0].image}`, 0)}
              />
            )}
          </>
        )}
      </div>

      {isModalOpen && modalImages.length > 0 && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img
              src={modalImages[currentImageIndex]}
              alt=""
              style={{ width: "100%", height: "100%", display: "block", margin: "auto" }}
            />
            {modalImages.length > 1 && (
              <>
                <button className="prev-modal" onClick={handlePrevClick}>&lt;</button>
                <button className="next-modal" onClick={handleNextClick}>&gt;</button>
              </>
            )}
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