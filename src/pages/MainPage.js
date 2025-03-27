import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import xrayBg from '../assets/xray-bg.jpg';
import profilePlaceholder from '../assets/profile-placeholder.png';
import '../styles/MainPage.css';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container" style={{ backgroundImage: `url(${xrayBg})` }}>
      <header>
        <div className="profile-pic">
          <img src={profilePlaceholder} alt="Profile" />
        </div>
        <nav>
          <Link to="/profile">Profile</Link>
          <Link to="/upload-images">Upload Images</Link>
          <Link to="/patient-records">Patient Records</Link>
          <Link to="/about">About Us</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/login">Logout</Link>
        </nav>
      </header>

      <div className="main-content">
        <h1>Welcome to Forensodont</h1>
        <p>Explore our services to manage patient records, upload radiographic images, and more.</p>
        <div className="cta-buttons">
          <button className="btn" onClick={() => navigate('/dental-examination')}>
            Dental Examination
          </button>
          <button className="btn" onClick={() => navigate('/patient-records')}>
            Patient Records
          </button>
          <button className="btn" onClick={() => navigate('/upload-images')}>
            Upload Images
          </button>
        </div>
      </div>

      <footer>
        <p>ADDRESS: Government Dental College & Hospital, P D’Mello Rd, Chhatrapati Shivaji Terminus Area, Fort, CSMT, Mumbai, Maharashtra 400001</p>
        <p>Contact Number: 02-22226-20668 | Email: deangdch_mumbai@yahoo.com</p>
        <p>Copyright © 2024 Government Dental College and Hospital, Mumbai</p>
      </footer>
    </div>
  );
};

export default MainPage;