import React, { useState, useEffect } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch('/api/certificates/');
        const data = await response.json();
        setCertificates(data);
      } catch (error) {
        console.error('Ошибка при получении данных о сертификатах:', error);
      }
    };

    fetchCertificates();
  }, []);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="certificates">
      <h2>Сертификаты</h2>
      {certificates.map((certificate, index) => (
        <div key={index} className="certificate-item" onClick={() => handleCertificateClick(certificate)}>
          <h3>{certificate.title}</h3>
          <p>{certificate.description}</p>
          <p><a href={certificate.url} target="_blank" rel="noopener noreferrer">Посмотреть сертификат</a></p>
          {certificate.image && (
            <img src={certificate.image} alt={certificate.title} />
          )}
        </div>
      ))}

      {/* Модальное окно для просмотра выбранного сертификата */}
      {selectedCertificate && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedCertificate.title}</h2>
            <p>{selectedCertificate.description}</p>
            <p><a href={selectedCertificate.url} target="_blank" rel="noopener noreferrer">Посмотреть сертификат</a></p>
            {selectedCertificate.image && (
              <img src={selectedCertificate.image} alt={selectedCertificate.title} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;