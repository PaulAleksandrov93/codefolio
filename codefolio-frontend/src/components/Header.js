import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Главная</Link></li>
          <li><Link to="/projects"><FontAwesomeIcon icon={faProjectDiagram} /> Проекты</Link></li>
          <li><Link to="/about"><FontAwesomeIcon icon={faUser} /> О себе</Link></li>
          <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;