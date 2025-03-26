import React from 'react';
import { Link } from 'react-router-dom'; // Add Link import
import xrayBg from '../assets/xray-bg.jpg';
import profilePlaceholder from '../assets/profile-placeholder.png';
import '../styles/MainPage.css';

const MainPage = () => {
  return (
    <div className="main-container" style={{ backgroundImage: `url(${xrayBg})` }}>
      <header>
        <div className="profile-pic">
          <img src={profilePlaceholder} alt="Profile" />
        </div>
        <nav>
          <a href="/profile">Profile</a>
          <a href="/upload-images">Upload Images</a>
          <a href="/patient-records">Patient Records</a>
          <a href="/about">About Us</a>
          <a href="/feedback">Feedback</a>
          <a href="/login">Logout</a>
        </nav>
      </header>
      <div className="content">
        <h2>Welcome to Forensodont</h2>
        <p>Explore our services to manage patient records, upload radiographic images, and more.</p>
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