
import React from 'react';
import image1 from './imagesp.webp';
import image2 from './What.jpeg';
import image3 from './Imagesabout.png';


const AboutUs = () => {
  return (
    <div>
      <header style={{ backgroundColor: '#4CAF50', padding: '1em', textAlign: 'center', color: 'white' }}>
        <h1>About Us</h1>
      </header>

      <section style={{ padding: '20px', paddingBottom: '50px', backgroundColor: '#f8f8f8' }}>
        <h2 style={{ color: '#4CAF50', marginBottom: '20px' }}>Welcome to Task Management Solutions</h2>
        <p style={{ marginBottom: '30px' }}>
          We are dedicated to revolutionizing your work experience with advanced task management services. Simplify your workflow, collaborate seamlessly, and enhance productivity with our intuitive platform.
        </p>

        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <div style={{ flex: '1', marginRight: '20px' }}>
            <img src={image1} alt="Image 1" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </div>
          <div style={{ flex: '2' }}>
            <h3>Intuitive Task Tracking</h3>
            <p>
              Easily create, assign, and track tasks in real-time. Our user-friendly interface ensures that managing tasks is a seamless process.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <div style={{ flex: '1', marginRight: '20px' }}>
            <img src={image2} alt="Image 2" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </div>
          <div style={{ flex: '2' }}>
            <h3>Collaborative Workspaces</h3>
            <p>
              Foster teamwork with shared project spaces and seamless communication. Our collaborative features make working together a breeze.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1', marginRight: '20px' }}>
            <img src={image3} alt="Image 3" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </div>
          <div style={{ flex: '2' }}>
            <h3>Deadline Management</h3>
            <p>
              Stay on top of your schedule with customizable deadlines and reminders. Our platform helps you meet your project timelines efficiently.
            </p>
          </div>
        </div>

        {/* Additional content or images can be added here */}
      </section>

      
    </div>
  );
};

export default AboutUs;
