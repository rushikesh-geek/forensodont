import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import PatientRecordsPage from './pages/PatientRecordsPage';
import UploadImagesPage from './pages/UploadImagesPage';
import AboutPage from './pages/AboutPage';
import DentalExamination from './pages/DentalExamination';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/patient-records" element={<PatientRecordsPage />} />
        <Route path="/upload-images" element={<UploadImagesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dental-examination" element={<DentalExamination />} />
      </Routes>
    </Router>
  );
}

export default App;