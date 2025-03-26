import React from 'react';
import { Link } from 'react-router-dom';
import xrayBg from '../assets/xray-bg.jpg';
import toothIcon from '../assets/tooth-icon.png';
import '../styles/LandingPage.css';

// Add a console log to confirm the component is rendering
console.log('LandingPage is rendering');

const LandingPage = () => {
  return (
    <div className="landing-container" style={{ backgroundImage: `url(${xrayBg})` }}>
      <div className="header">
        <div className="logo">
          <img src={toothIcon} alt="Tooth Icon" />
        </div>
        <h1>FORENSODONT</h1>
        <p>You may disappear, but your jaw will always identify you</p>
      </div>
      <div className="buttons">
        <Link to="/login">
          <button className="btn">I have an account</button>
        </Link>
        <Link to="/register">
          <button className="btn">Create an account</button>
        </Link>
      </div>
      <footer>
        <p>ADDRESS: Government Dental College & Hospital, P D’Mello Rd, Chhatrapati Shivaji Terminus Area, Fort, CSMT, Mumbai, Maharashtra 400001</p>
        <p>Contact Number: 02-22226-20668 | Email: deangdch_mumbai@yahoo.com</p>
        <p>Copyright © 2024 Government Dental College and Hospital, Mumbai</p>
      </footer>
    </div>
  );
};

export default LandingPage;