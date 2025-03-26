import React from 'react';
import { Link } from 'react-router-dom';
import gdchLogo from '../assets/gdch-logo.png';
import vesLogo from '../assets/ves-logo.png';
import profilePlaceholder from '../assets/profile-placeholder.png';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <header>
        <div className="profile-pic">
          <img src={profilePlaceholder} alt="Profile" onError={() => console.log('Profile image failed to load')} />
        </div>
        <nav>
          <Link to="/main">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/login">Logout</Link>
        </nav>
      </header>

      <div className="about-content">
        <div className="logos">
          <img src={gdchLogo} alt="GDCH Logo" onError={() => console.log('GDCH Logo failed to load')} />
          <img src={vesLogo} alt="VES Logo" onError={() => console.log('VES Logo failed to load')} />
        </div>
        <p>
          The Government Dental College & Hospital, Mumbai, a premier institution dedicated to advanced dental education and patient care, has collaborated with the innovative and esteemed Vivekanand Education Society’s Institute of Technology to develop Forensodont, a specialized website designed to assist doctors and forensic experts in identifying individuals through dental records.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;