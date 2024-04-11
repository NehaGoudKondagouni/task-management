import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Deadline.css'
function Deadline() {
  const navigate = useNavigate();

  const handleAssignTask = () => {
    // Navigate to EmployeeTaskAssign
    navigate('/status');
  };

  const handleProjectStatus = () => {
    // Navigate to ProjectStatus
    navigate('/assign');
  };

  return (
    <div className='container'>
      <h2>User Page</h2>
      <button onClick={handleAssignTask}>Update Status</button>
      <button onClick={handleProjectStatus}>To do Tasks</button>
    </div>
  );
}

export default Deadline;
