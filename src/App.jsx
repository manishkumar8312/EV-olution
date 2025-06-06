import React, { useState } from 'react';
import './App.css';
import { Background } from './components/Background/Background.jsx';
import { Navbar }     from './components/NavBar/Navbar.jsx';
import Hero           from './components/Hero/hero.jsx';
import Explore        from './components/Explore/Explore.jsx';
import About          from './components/About/About.jsx';
import Contact        from './components/Contact/Contact.jsx';
import SignIn         from './components/SignIn/SignIn.jsx';
import SignUp         from './components/SignUp/SignUp.jsx';
import SignOut        from './components/SignOut/SignOut.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "your passion" },
    { text1: "Give in to", text2: "your passion" },
  ];
  // routing state now declared above
  if (!isAuthenticated) {
    if (currentPage === 'signup') {
      return <SignUp setAuth={setIsAuthenticated} setPage={setCurrentPage} />;
    }
    return <SignIn setAuth={setIsAuthenticated} setPage={setCurrentPage} />;
  }
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar
        setPage={setCurrentPage}
        isAuthenticated={isAuthenticated}
        onSignOut={() => { setIsAuthenticated(false); setCurrentPage('signin'); }}
      />
      {currentPage === 'home' && (
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
          setPage={setCurrentPage}
        />
      )}
      {currentPage === 'explore' && <Explore />}
      {currentPage === 'about' && <About />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'signout' && (
        <SignOut setAuth={setIsAuthenticated} setPage={setCurrentPage} />
      )}
    </div>
  )
}

export default App
