import React from 'react';
import './Navbar.css';

export const Navbar = (props) => {
  const { setPage, onSignOut, isAuthenticated } = props;
  return (
    <div className="nav">
      <div
        className="nav-logo"
        onClick={() => setPage('home')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' ? setPage('home') : null)}
        aria-label="Go to Home page"
      >
        ⚡ <span className="logo-text">EV-olution</span>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setPage('home')}>Home</li>
        <li onClick={() => setPage('explore')}>Explore</li>
        <li onClick={() => setPage('about')}>About</li>
        <li className="nav-contact" onClick={() => setPage('contact')}>
          Contact
        </li>
        {!isAuthenticated && (
          <li className="nav-signin" onClick={() => setPage('signin')}>
            🔑 Sign In
          </li>
        )}
        {isAuthenticated && (
          <li className="nav-signout" onClick={onSignOut}>
            🚪 Sign Out
          </li>
        )}
      </ul>
    </div>
  );
};
