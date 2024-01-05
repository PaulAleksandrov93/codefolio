import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userMessage: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    try {
      // Отправка данных формы на сервер с использованием fetch
      const response = await fetch('http://localhost:8000/api/contact-form/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.message);  // Выводим сообщение от сервера

        // Очищаем поля ввода после успешной отправки
        setFormData({
          name: '',
          email: '',
          userMessage: '',
        });
      } else {
        console.error('Ошибка при отправке формы:', response.statusText);
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  };

  return (
    <div className="contactpage">
      <h1>Контакты</h1>
      <div className="contact-info">
        <p>Telegram: <a href="https://t.me/AleksandrovPavel93" target="_blank" rel="noopener noreferrer">AleksandrovPavel93</a></p>
        <p>WhatsApp: <a href="https://wa.me/79321230823" target="_blank" rel="noopener noreferrer">79321230823</a></p>
        <p>VK: <a href="https://vk.com/id235383670" target="_blank" rel="noopener noreferrer">id235383670</a></p>
        <p>Сотовый телефон: +7 (932) 123-08-23</p>
      </div>
      <div className="contact-form">
        <h2>Форма обратной связи</h2>
        <form onSubmit={handleContactSubmit}>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="userMessage">Ваше сообщение:</label>
          <textarea
            id="userMessage"
            name="userMessage"
            rows="4"
            value={formData.userMessage}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;