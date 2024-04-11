import React, { useState } from 'react';
import './EmployeeTask.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const EmployeeTaskAssign = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskId, setTaskId] = useState('');
  const [deadline, setDeadline] = useState('');
  const [assignedTasks, setAssignedTasks] = useState([]);
  const navigate =useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3004/employee', {
      employeeId,
      taskName,
      taskId, 
      deadline,
    })
      .then(result => {
        console.log('task has successfully assigned');
        alert("task assigned successfully")
      })
      .catch(err => console.log(err));
    resetForm();
  }
  
  const resetForm = () => {
    setEmployeeId('');
    setTaskName('');
    setTaskId('');
    setDeadline('');
  };

  return (
    <>
      <div className='MainContainer'>
        <p>Assign Tasks</p>
        <form onSubmit={handleSubmit}>
          <div className='FirstContainer'>
            <label className='Blacklabel'>Employee Id:</label>
            <input
              type='text'
              id='Meid'
              placeholder='Employeeid'
              value={employeeId}
              required='True'
              onChange={(e) => setEmployeeId(e.target.value)}
            />
          </div>
          <br />
          <label>Task Name:</label>
          <input
            type='text'
            id='Mtn'
            placeholder='Task Name'
            value={taskName}
            required='True'
            onChange={(e) => setTaskName(e.target.value)}
          />
          <br />
          <label>Task Id:</label>
          <input
            type='number'
            id='Mtid'
            placeholder='Task Id'
            value={taskId}
            required='True'
            onChange={(e) => setTaskId(e.target.value)}
          />
          <br />
          <label>Deadline:</label>
          <input
            type='date'
            id='Mdl'
            placeholder='Deadline'
            value={deadline}
            required='True'
            onChange={(e) => setDeadline(e.target.value)}
          />
          <br />
          <button type='submit' id='sbt'>
            Assign Task
          </button>
        </form>
      </div>
    </>
  );
};


export default EmployeeTaskAssign;
