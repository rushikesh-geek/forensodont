import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import xrayBg from '../assets/xray-bg.jpg';
import '../styles/RegisterPage.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [stateOfPractice, setStateOfPractice] = useState('');
  const [addressOfPractice, setAddressOfPractice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Simulate successful registration (no backend call for now)
    // In a real app, you would make an API call here and handle the response
    navigate('/login');
  };

  return (
    <div className="register-container" style={{ backgroundImage: `url(${xrayBg})` }}>
      <div className="register-form">
        <h2>Register</h2>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form onSubmit={handleRegister}>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <label>Registration Number</label>
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            required
          />
          <label>State of Practice</label>
          <select
            value={stateOfPractice}
            onChange={(e) => setStateOfPractice(e.target.value)}
            required
          >
            <option value="">Select a state</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Delhi">Delhi</option>
            <option value="Karnataka">Karnataka</option>
          </select>
          <label>Address of Practice</label>
          <input
            type="text"
            value={addressOfPractice}
            onChange={(e) => setAddressOfPractice(e.target.value)}
            required
          />
          <div className="form-buttons">
            <button type="button" className="btn cancel" onClick={() => navigate('/')}>Cancel</button>
            <button type="submit" className="btn submit">Register</button>
          </div>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;