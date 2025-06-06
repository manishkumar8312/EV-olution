import React, { useState } from 'react';
import './SignIn.css';

const SignIn = ({ setAuth, setPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: integrate real authentication
    setAuth(true);
    setPage('home');
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Login Form</h2>
        <div className="tabs">
          <button className="active">Login</button>
          <button onClick={() => setPage('signup')}>Signup</button>
        </div>
        <form onSubmit={handleLogin} className="signin-form">
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <p className="forgot" onClick={() => setPage('forgot')}>Forgot password?</p>
          <button type="submit" className="btn">Login</button>
        </form>
        <p className="toggle-text">
          Not a member? <span onClick={() => setPage('signup')} className="link">Signup now</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
