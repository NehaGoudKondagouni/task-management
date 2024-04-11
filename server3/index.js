require('events').EventEmitter.defaultMaxListeners = 15; 

// Then proceed with your code...
const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/Employee');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/server3");
app.post('/employee', async (req, res) => {
    try {
      const { employeeId, taskName, taskId, deadline } = req.body;
  
      // Create a new task instance using the Task model
      const newTask = new Task({
        employeeId,
        taskName,
        taskId,
        deadline,
      });
  
      // Save the task to the database
      await newTask.save();
  
      res.status(201).json({ message: 'Task created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

app.listen(3004,()=>{
    console.log("server is running on port 3004")
})