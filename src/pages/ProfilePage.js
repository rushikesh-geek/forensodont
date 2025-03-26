import React, { useState, useEffect } from 'react';
import axios from 'axios';
import xrayBg from '../assets/xray-bg.jpg'; // Import the background image
import profilePlaceholder from '../assets/profile-placeholder.png'; // Import the profile image
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState({ name: '', email: '', registrationNo: '', state: '', address: '' });
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put('http://localhost:5000/api/auth/profile', profile, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleProfilePicUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('profilePic', file);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/api/auth/upload-profile-pic', formData, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
      });
      setProfilePic(response.data.profilePic);
    } catch (error) {
      console.error('Error uploading profile picture:', error);
    }
  };

  return (
    <div className="profile-container">
      <header>
        <div className="profile-pic">
          <img src={profilePic || '/profile-placeholder.png'} alt="Profile" />
          <input type="file" onChange={handleProfilePicUpload} />
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/feedback">Feedback</a>
          <a href="/login">Logout</a>
        </nav>
      </header>
      <div className="profile-form">
        <h2>Profile</h2>
        <form onSubmit={handleProfileUpdate}>
          <label>Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
          <label>Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <label>Registration Number</label>
          <input
            type="text"
            value={profile.registrationNo}
            onChange={(e) => setProfile({ ...profile, registrationNo: e.target.value })}
          />
          <label>State of Practice</label>
          <input
            type="text"
            value={profile.state}
            onChange={(e) => setProfile({ ...profile, state: e.target.value })}
          />
          <label>Address of Practice</label>
          <input
            type="text"
            value={profile.address}
            onChange={(e) => setProfile({ ...profile, address: e.target.value })}
          />
          <button type="submit" className="btn">Update Profile</button>
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

export default ProfilePage;