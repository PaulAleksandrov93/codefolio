import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Certificates from '../components/Certificates';
import './HomePage.css';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="homepage">
      <h1>Добро пожаловать в моё портфолио!</h1>
      <p>
        Приветствую! Я начинающий фулстек разработчик с более чем годом практического опыта в разработке на Python. Мой опыт также включает в себя работу с JavaScript, фреймворками Django (DRF) и React.
      </p>
      <p>
        В настоящее время занимаюсь разработкой проектов EnviroTrackApp и OpenRazor, которые доступны на моем GitHub: <a href="https://github.com/PaulAleksandrov93" target="_blank" rel="noopener noreferrer">https://github.com/PaulAleksandrov93</a>.
      </p>
      <p>
        Мои компетенции включают в себя знание основ ООП, работу с базами данных (PostgreSQL, Django ORM), Docker для контейнеризации приложений, Celery и RabbitMQ для асинхронной обработки задач, написание тестов с использованием pytest и другие технологии.
      </p>
      <p>
        Имею опыт работы с протоколом TCP/IP, языками C/C++, разработку Scada-системы на языке C и работу с unix-подобными системами.
      </p>
      <p>
        Владею JavaScript, имею опыт разработки фронтенд-части с использованием React, что позволяет создавать современные пользовательские интерфейсы.
      </p>
      <p>
        Готов решать разнообразные задачи и применять свой опыт в различных областях разработки.
      </p>
      <p>
        Мой профиль на Stepik: <a href="https://stepik.org/users/590531792" target="_blank" rel="noopener noreferrer">https://stepik.org/users/590531792</a>.
      </p>
      <p>
        Если вы хотите ознакомиться с моей работой, перейдите на вкладку <Link to="/projects">Проекты</Link>.
      </p>
      <img
        src={process.env.PUBLIC_URL + '/Structure.jpeg'}
        alt="Структура"
        style={{ width: '100%', maxWidth: '800px', margin: '20px 0', cursor: 'pointer' }}
        onClick={handleImageClick}
      />
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img
              src={process.env.PUBLIC_URL + '/Structure.jpeg'}
              alt="Структура"
              style={{ width: '100%', maxHeight: '90vh' }}
            />
          </div>
        </div>
      )}
      <Certificates />
    </div>
  );
};

export default HomePage;