import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import xrayBg from '../assets/xray-bg.jpg';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Hardcoded users for login
  const users = [
    { email: 'amar@gmail.com', password: '123' },
    { email: 'akbar@gmail.com', password: '456' },
    { email: 'anthony@gmail.com', password: '789' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the entered email and password match any user
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      // Simulate storing a token (in a real app, this would come from the backend)
      localStorage.setItem('token', 'fake-token');
      // Redirect to the DentalExamination page
      navigate('/dental-examination');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${xrayBg})` }}>
      <div className="login-form">
        <h2>Login</h2>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <div className="form-buttons">
            <button type="button" className="btn cancel" onClick={() => navigate('/')}>Cancel</button>
            <button type="submit" className="btn submit">Login</button>
          </div>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;