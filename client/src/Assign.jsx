import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Assign.css';

function Assign() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3005/employee')
      .then(response => {
        console.log('Fetched data:', response.data);
        setEmployees(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  // Function to calculate time remaining from deadline
  const calculateTimeRemaining = (deadline) => {
    const now = new Date().getTime();
    const deadlineTime = new Date(deadline).getTime();
    const timeRemaining = deadlineTime - now;

    if (timeRemaining <= 0) {
      return 'Time Expired';
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  };

  useEffect(() => {
    // Update the time remaining for each task every second
    const interval = setInterval(() => {
      setEmployees(prevEmployees =>
        prevEmployees.map(employee => ({
          ...employee,
          timeRemaining: calculateTimeRemaining(employee.deadline),
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [employees]); // Re-run effect when 'employees' data changes

  return (
    <div className='container'>
      <p>Your Tasks</p>
      <table className='table'>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Task Name</th>
            <th>Task ID</th>
            <th>Deadline</th>
            <th>Time Remaining</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(user => (
            <tr key={user._id}>
              <td>{user.employeeId}</td>
              <td>{user.taskName}</td>
              <td>{user.taskId}</td>
              <td>{user.deadline}</td>
              <td>{user.timeRemaining}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Assign;
