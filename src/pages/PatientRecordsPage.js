import React, { useState, useEffect } from 'react';
import axios from 'axios';
import xrayBg from '../assets/xray-bg.jpg'; // Import the background image
import profilePlaceholder from '../assets/profile-placeholder.png'; // Import the profile image
import '../styles/PatientRecordsPage.css';

const PatientRecordsPage = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/patients', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };
    fetchPatients();
  }, []);

  return (
    <div className="patient-records-container">
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
      <div className="search-bar">
        <button className="btn">Dental Examination</button>
        <button className="btn">Patient Records</button>
        <input type="text" placeholder="Search by Patient" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Sex</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>Registration No</th>
            <th>Date of Visit</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient._id}>
              <td>{patient.name}</td>
              <td>{patient.dob}</td>
              <td>{patient.sex}</td>
              <td>{patient.address}</td>
              <td>{patient.contactNumber}</td>
              <td>{patient.registrationNo}</td>
              <td>{patient.dateOfVisit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer>
        <p>ADDRESS: Government Dental College & Hospital, P D’Mello Rd, Chhatrapati Shivaji Terminus Area, Fort, CSMT, Mumbai, Maharashtra 400001</p>
        <p>Contact Number: 02-22226-20668 | Email: deangdch_mumbai@yahoo.com</p>
        <p>Copyright © 2024 Government Dental College and Hospital, Mumbai</p>
      </footer>
    </div>
  );
};

export default PatientRecordsPage;