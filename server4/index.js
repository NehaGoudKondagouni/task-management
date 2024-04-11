require('events').EventEmitter.defaultMaxListeners = 15; 

// Then proceed with your code...
const express = require('express');
const mongoose = require('mongoose');
const assign1 = require('./models/Employee');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/server3");
app.get('/employee', async (req, res) => {
    try {
      const employees = await assign1.find();
      console.log(employees); // Log the fetched employees
      res.json(employees);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
app.listen(3005,()=>{
    console.log("server is running on port 3005")
})
