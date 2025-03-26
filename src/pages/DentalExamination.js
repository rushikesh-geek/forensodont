import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Add useNavigate import
import xrayBg from '../assets/xray-bg.jpg';
import profilePlaceholder from '../assets/profile-placeholder.png';
import '../styles/DentalExamination.css';

const DentalExamination = () => {
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    contactNumber: '',
    dateOfVisit: '',
  });

  const [regressiveChanges, setRegressiveChanges] = useState({
    attrition: '',
    abrasion: '',
    erosion: '',
    abfraction: '',
  });

  const [dentition, setDentition] = useState({
    primary: '',
    mixed: '',
    permanent: '',
  });

  const [pathologies, setPathologies] = useState({
    tooth: {
      size: '',
      shape: '',
      structure: '',
      malposition: '',
    },
    others: {
      lipsAndPalate: '',
      softTissues: '',
      gingiva: '',
      jaw: '',
    },
  });

  const [radiographicImages, setRadiographicImages] = useState({
    opg: null,
    bitewing: null,
    cbct: null,
  });

  const navigate = useNavigate(); // Define navigate using useNavigate hook

  const handlePatientDetailsChange = (e) => {
    setPatientDetails({ ...patientDetails, [e.target.name]: e.target.value });
  };

  const handleRegressiveChangesChange = (e) => {
    setRegressiveChanges({ ...regressiveChanges, [e.target.name]: e.target.value });
  };

  const handleDentitionChange = (e) => {
    setDentition({ ...dentition, [e.target.name]: e.target.value });
  };

  const handlePathologiesChange = (section, e) => {
    setPathologies({
      ...pathologies,
      [section]: { ...pathologies[section], [e.target.name]: e.target.value },
    });
  };

  const handleImageChange = (e) => {
    setRadiographicImages({ ...radiographicImages, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to the backend
    console.log({
      patientDetails,
      regressiveChanges,
      dentition,
      pathologies,
      radiographicImages,
    });
    alert('Form submitted successfully!');
  };

  return (
    <div className="dental-examination-container" style={{ backgroundImage: `url(${xrayBg})` }}>
      <header>
        <div className="profile-pic">
          <img src={profilePlaceholder} alt="Profile" />
        </div>
        <nav>
          <Link to="/main">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/login">Logout</Link>
        </nav>
        <div className="nav-buttons">
          <button className="btn">Dental Examination</button>
          <button className="btn">Patient Records</button>
        </div>
      </header>

      <div className="dental-examination-content">
        <h2>Dental Examination</h2>

        <div className="section patient-details">
          <h3>Patient Details</h3>
          <label>Name of the Patient</label>
          <input
            type="text"
            name="name"
            value={patientDetails.name}
            onChange={handlePatientDetailsChange}
          />
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={patientDetails.dateOfBirth}
            onChange={handlePatientDetailsChange}
          />
          <label>Gender</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={patientDetails.gender === 'Male'}
                onChange={handlePatientDetailsChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={patientDetails.gender === 'Female'}
                onChange={handlePatientDetailsChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={patientDetails.gender === 'Other'}
                onChange={handlePatientDetailsChange}
              />
              Other
            </label>
          </div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={patientDetails.address}
            onChange={handlePatientDetailsChange}
          />
          <label>Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={patientDetails.contactNumber}
            onChange={handlePatientDetailsChange}
          />
          <label>Date of Visit</label>
          <input
            type="date"
            name="dateOfVisit"
            value={patientDetails.dateOfVisit}
            onChange={handlePatientDetailsChange}
          />
        </div>

        <div className="section regressive-changes">
          <h3>Regressive Changes</h3>
          <label>Attrition</label>
          <input
            type="text"
            name="attrition"
            value={regressiveChanges.attrition}
            onChange={handleRegressiveChangesChange}
          />
          <label>Abrasion</label>
          <input
            type="text"
            name="abrasion"
            value={regressiveChanges.abrasion}
            onChange={handleRegressiveChangesChange}
          />
          <label>Erosion</label>
          <input
            type="text"
            name="erosion"
            value={regressiveChanges.erosion}
            onChange={handleRegressiveChangesChange}
          />
          <label>Abfraction</label>
          <input
            type="text"
            name="abfraction"
            value={regressiveChanges.abfraction}
            onChange={handleRegressiveChangesChange}
          />
        </div>

        <div className="section types-of-dentition">
          <h3>Types of Dentition</h3>
          <label>Primary</label>
          <input
            type="text"
            name="primary"
            value={dentition.primary}
            onChange={handleDentitionChange}
          />
          <label>Mixed</label>
          <input
            type="text"
            name="mixed"
            value={dentition.mixed}
            onChange={handleDentitionChange}
          />
          <label>Permanent</label>
          <input
            type="text"
            name="permanent"
            value={dentition.permanent}
            onChange={handleDentitionChange}
          />
        </div>

        <div className="pathologies">
          <div className="section tooth-pathologies">
            <h3>Pathologies</h3>
            <h4>Tooth</h4>
            <label>Size</label>
            <input
              type="text"
              name="size"
              value={pathologies.tooth.size}
              onChange={(e) => handlePathologiesChange('tooth', e)}
            />
            <label>Shape</label>
            <input
              type="text"
              name="shape"
              value={pathologies.tooth.shape}
              onChange={(e) => handlePathologiesChange('tooth', e)}
            />
            <label>Structure</label>
            <input
              type="text"
              name="structure"
              value={pathologies.tooth.structure}
              onChange={(e) => handlePathologiesChange('tooth', e)}
            />
            <label>Malposition</label>
            <input
              type="text"
              name="malposition"
              value={pathologies.tooth.malposition}
              onChange={(e) => handlePathologiesChange('tooth', e)}
            />
          </div>

          <div className="section other-pathologies">
            <h3>Others</h3>
            <label>Lips & Palate</label>
            <input
              type="text"
              name="lipsAndPalate"
              value={pathologies.others.lipsAndPalate}
              onChange={(e) => handlePathologiesChange('others', e)}
            />
            <label>Soft Tissues</label>
            <input
              type="text"
              name="softTissues"
              value={pathologies.others.softTissues}
              onChange={(e) => handlePathologiesChange('others', e)}
            />
            <label>Gingiva</label>
            <input
              type="text"
              name="gingiva"
              value={pathologies.others.gingiva}
              onChange={(e) => handlePathologiesChange('others', e)}
            />
            <label>Jaw</label>
            <input
              type="text"
              name="jaw"
              value={pathologies.others.jaw}
              onChange={(e) => handlePathologiesChange('others', e)}
            />
          </div>
        </div>

        <div className="section radiographic-images">
          <h3>Radiographic Images</h3>
          <label>OPG</label>
          <input type="file" name="opg" onChange={handleImageChange} />
          <label>Bitewing</label>
          <input type="file" name="bitewing" onChange={handleImageChange} />
          <label>CBCT</label>
          <input type="file" name="cbct" onChange={handleImageChange} />
        </div>

        <div className="form-buttons">
          <button type="button" className="btn cancel" onClick={() => navigate('/main')}>
            Cancel
          </button>
          <button type="submit" className="btn submit" onClick={handleSubmit}>
            Submit
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

export default DentalExamination;