import React, {useContext}from 'react';
import { UserContext } from '../../UserContext';
import './Homepage.css';

const Homepage = () => {
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser(null);

  }

  return (
    <div className="homepage-container">
      <nav className="navbar">
        <p className='greeting'>

        Hello, {user}!
        </p>
        <button className="logout-button" onClick={handleClick}>
          Logout
        </button>
      </nav>
      <div className="home-banner"></div>
    </div>
  );
};

export default Homepage;
