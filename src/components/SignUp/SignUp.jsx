import React, { useState } from 'react';
import './SignUp.css';

const SignUp = ({ setAuth, setPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // TODO: integrate real signup logic
    setAuth(true);
    setPage('home');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Signup Form</h2>
        <form onSubmit={handleSignUp} className="signup-form">
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <p className="toggle-text">
          Already have an account?{' '}
          <span className="link" onClick={() => setPage('signin')}>Login here</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
