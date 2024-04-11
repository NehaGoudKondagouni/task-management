import React, { useState, useEffect } from 'react';
import './EmployeeTask.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Neha = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskId, setTaskId] = useState('');
  const [deadline, setDeadline] = useState('');
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = new Date(deadline).getTime() - now;

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setTimeLeft(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);
      } else {
        setTimeLeft('Time Expired');
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3004/employee', {
      employeeId,
      taskName,
      taskId,
      deadline,
    })
      .then(result => {
        console.log('Task has been successfully assigned');
        alert('Task assigned successfully');
      })
      .catch(err => console.log(err));
    resetForm();
  };

  const resetForm = () => {
    setEmployeeId('');
    setTaskName('');
    setTaskId('');
    setDeadline('');
  };

  return (
    <div className='MainContainer'>
      <p>Assign Tasks</p>
      <form onSubmit={handleSubmit}>
        <div className='FirstContainer'>
          <label className='Blacklabel'>Employee Id:</label>
          <input
            type='text'
            id='Meid'
            placeholder='Employee ID'
            value={employeeId}
            required={true}
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
          required={true}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <br />
        <label>Task Id:</label>
        <input
          type='number'
          id='Mtid'
          placeholder='Task ID'
          value={taskId}
          required={true}
          onChange={(e) => setTaskId(e.target.value)}
        />
        <br />
        <label>Deadline:</label>
        <input
          type='date'
          id='Mdl'
          placeholder='Deadline'
          value={deadline}
          required={true}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <br />
        <div>
          <label>Time Left: {timeLeft}</label>
        </div>
        <button type='submit' id='sbt'>Assign Task</button>
      </form>
    </div>
  );
};

export default Neha;


