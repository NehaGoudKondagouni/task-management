import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './ProjectStatus.css'

const ProjectStatus = () => {
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the selected project and status to the backend
    axios.post('http://localhost:3007/status', { projectName: selectedProject, status: selectedStatus })
      .then(result => {
        console.log(result.data);
        alert('success')
        // Handle success, reset form or do other operations
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="employee-task-information">
      {/* Your table and buttons code */}
      
      {/* Additional form to select project and status */}
      <form onSubmit={handleSubmit}>
        <label>Select Project:</label>
        <input
          type="text"
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        />

        <label>Select Status:</label>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>

        <button type="submit">Update Status</button>
      </form>
    </div>
  );
};

export default ProjectStatus;
