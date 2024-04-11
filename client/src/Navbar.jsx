// Navbar.js

/*import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-item-home">Home</Link>
      <Link to="/login" className="nav-item-login">Login</Link>
      <Link to="/contact" className="nav-item-Contact">Contact Us</Link>
    </div>
  );
}

export default Navbar;*/
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#acdcb5',
          paddingBottom: '15px',
          display: 'flex',
          justifyContent: 'space-between', // Changed from 'space-around'
          alignItems: 'center', // Added alignment to center vertically
          width: '100%',
          top: '0',
        }}
        className="navbar"
      >
        <div style={{ marginLeft: '10px' }}> {/* New div for the heading */}
          <h1 style={{ margin: 0, fontFamily: 'Arial italic', color: '#71b2de' }}>TASK MANAGEMENT</h1>
        </div>
        <div style={{ marginRight: '10px' }}>
          <Link to="/" style={linkStyle} className="nav-item-home">
            Home
          </Link>
          <Link to="/contact" style={linkStyle} className="nav-item-Contact">
            About Us
          </Link>
          <Link to="/demo1" style={linkStyle} className="nav-item-login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  margin: '0 10px',
  fontSize: '20px',
  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  marginTop: '24px',
};

export default Navbar;
