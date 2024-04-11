import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Demo.css'
function Demo() {
  const navigate = useNavigate();

  const handleAssignTask = () => {
    // Navigate to EmployeeTaskAssign
    navigate('/app1');
  };

  const handleProjectStatus = () => {
    // Navigate to ProjectStatus
    navigate('/employee');
  };

  return (
    <div className='container'>
      <h2>Manager Page</h2>
      <button onClick={handleAssignTask}>Project Status</button>
      <button onClick={handleProjectStatus}>Assign task</button>
    </div>
  );
}

export default Demo;
