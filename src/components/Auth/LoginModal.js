import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/LoginModal.css';

const LoginModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, accept any email and password
    if (formData.email && formData.password) {
      navigate('/dashboard');
    } else {
      alert('Please enter both email and password');
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="login-modal-overlay" onClick={handleOverlayClick}>
      <div className="login-modal-container">
        <div className="login-modal-header">
          <h2 className="login-title">Administrator Login</h2>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-submit-btn">
            Login 
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;