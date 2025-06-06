import React, { useEffect } from 'react';
import './SignOut.css';

const SignOut = ({ setAuth, setPage }) => {
  useEffect(() => setAuth(false), [setAuth]);

  return (
    <div className="signout-container">
      <div className="signout-card">
        <h2>You have signed out</h2>
        <button onClick={() => setPage('signin')} className="btn">Sign In</button>
      </div>
    </div>
  );
};

export default SignOut;
