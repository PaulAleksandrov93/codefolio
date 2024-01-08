import React, { useState, useEffect } from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('/api/profiles/');
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error('Ошибка при получении данных профилей:', error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div className="aboutpage">
      <h1>Обо мне</h1>
      <div className="about-content">
        {profiles.map((profile, index) => (
          <div key={index}>
            <p>{`Имя: ${profile.first_name} ${profile.last_name}`}</p>
            <p>{`Email: ${profile.email}`}</p>
            <p>{`Биография: ${profile.bio || 'Нет информации'}`}</p>
            <p>{`Ссылка на резюме: ${profile.resume_link || 'Нет информации'}`}</p>
            <p>{`LinkedIn профиль: ${profile.linkedin_profile || 'Нет информации'}`}</p>
            <p>{`GitHub профиль: ${profile.github_profile || 'Нет информации'}`}</p>
            <p>{`Telegram: ${profile.telegram_username || 'Нет информации'}`}</p>
            <p>Навыки:</p>
            <ul>
              {profile.skills && profile.skills.length > 0 ? (
                profile.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))
              ) : (
                <li>Нет информации</li>
              )}
            </ul>
            <p>Языки программирования:</p>
            <ul>
              {profile.languages && profile.languages.length > 0 ? (
                profile.languages.map((language, langIndex) => (
                  <li key={langIndex}>{language}</li>
                ))
              ) : (
                <li>Нет информации</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;