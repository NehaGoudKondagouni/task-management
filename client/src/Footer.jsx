// Footer.js

//import React from 'react';

//import './Footer.css';
// Footer.js

// Footer.js

// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container" style={{ 
      backgroundColor: '#333', 
      color: 'white', 
      display: 'flex', 
      position: 'fixed', 
      bottom: 0, 
      width: '100%', 
      transition: 'padding 0.5s ease', 
      paddingTop: '300px',
      marginTop: '500px',
      marginLeft: '0px',
      fontFamily: 'Georgia, "Times New Roman", Times, serif'
    }}>
      <div className="contact-info" style={{ 
        paddingLeft: '37px', 
        marginBottom: '10px', 
        marginTop: '25px', 
        paddingBottom: '9px'
      }}>
        {/* Your contact information goes here */}
      </div>

      <div className="lists" style={{ 
        paddingLeft: '47px', 
        marginTop: '25px'
      }}>
        {/* Lists or other content goes here */}
      </div>

      <div className="social-icons" style={{ 
        display: 'flex', 
        marginLeft: 'auto'
      }}>
        <a href="#" style={{ marginRight: '10px', marginTop: '25px' }}>
          <img src="./Img1.png" alt="Social Icon 1" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
        </a>
        <a href="#" style={{ marginRight: '10px', marginTop: '25px' }}>
          <img src="./img2.png" alt="Social Icon 2" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
        </a>
        {/* Add more social icons as needed */}
      </div>

      <div className="Email" style={{ width: '2px', height: '2px' }}>
        {/* Your Email component goes here */}
      </div>

      <div className="Task" style={{ width: '450px', marginTop: '25px', color: 'bisque', marginLeft: '15px' }}>
        {/* Your Task component goes here */}
      </div>
    </div>
  );
};

export default Footer;
