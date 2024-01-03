import React, { useState } from 'react';
import axios from 'axios';
import '../src/style/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    content: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/messages', formData);

      alert('Message sent successfully!');
      
      setFormData({
        subject: '',
        email: '',
        content: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please check the console for details.');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out if you have any questions or if you'd like to
        collaborate.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="Enter the subject"
          required
        />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          placeholder="Enter the content of the message"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
