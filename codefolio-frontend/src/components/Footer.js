import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faWhatsapp, faVk } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 Codefolio</p>
      <div className="social-icons">
        <a href="https://t.me/AleksandrovPavel93" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="https://wa.me/79321230823" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://vk.com/id235383670" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faVk} />
        </a>
        {/* <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;