import React, { useState } from 'react';
import LoginModal from '../components/Auth/LoginModal';
import '../styles/HomePage.css';


const HomePage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <div className={`home-container ${showLoginModal ? 'blurred' : ''}`}>
        <div className="home-content">
          
          
          <div className="welcome-section">
            <h1 className="welcome-title">
              Welcome to MediVault Command
            </h1>
            <p className="welcome-subtitle">
              Powered by MediLink
            </p>
           
          </div>
          
          <div className="action-section">
            <button 
              className="login-button"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      
      {showLoginModal && (
        <LoginModal onClose={handleCloseModal} />
      )}
    </>
  );
};

export default HomePage;