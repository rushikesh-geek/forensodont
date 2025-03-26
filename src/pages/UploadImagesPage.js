import React, { useState } from 'react';
import axios from 'axios';
import xrayBg from '../assets/xray-bg.jpg'; // Import the background image
import profilePlaceholder from '../assets/profile-placeholder.png'; // Import the profile image
import '../styles/UploadImagesPage.css';

const UploadImagesPage = () => {
  const [opg, setOpg] = useState(null);
  const [bitewing, setBitewing] = useState(null);
  const [cbct, setCbct] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (opg) formData.append('opg', opg);
    if (bitewing) formData.append('bitewing', bitewing);
    if (cbct) formData.append('cbct', cbct);

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/images/upload', formData, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
      });
      alert('Images uploaded successfully');
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  return (
    <div className="upload-container">
      <header>
        <div className="profile-pic">
          <img src="/profile-placeholder.png" alt="Profile" />
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/feedback">Feedback</a>
          <a href="/login">Logout</a>
        </nav>
      </header>
      <div className="upload-form">
        <h2>Radiographic Images</h2>
        <form onSubmit={handleUpload}>
          <label>OPG</label>
          <input type="file" onChange={(e) => setOpg(e.target.files[0])} />
          <label>Bitewing</label>
          <input type="file" onChange={(e) => setBitewing(e.target.files[0])} />
          <label>CBCT</label>
          <input type="file" onChange={(e) => setCbct(e.target.files[0])} />
          <div className="form-buttons">
            <button type="button" className="btn cancel">Cancel</button>
            <button type="submit" className="btn submit">Submit</button>
          </div>
        </form>
      </div>
      <footer>
        <p>ADDRESS: Government Dental College & Hospital, P D’Mello Rd, Chhatrapati Shivaji Terminus Area, Fort, CSMT, Mumbai, Maharashtra 400001</p>
        <p>Contact Number: 02-22226-20668 | Email: deangdch_mumbai@yahoo.com</p>
        <p>Copyright © 2024 Government Dental College and Hospital, Mumbai</p>
      </footer>
    </div>
  );
};

export default UploadImagesPage;