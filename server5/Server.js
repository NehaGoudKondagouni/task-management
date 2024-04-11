const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Project = require('./models/Project'); // Import your model schema

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/server5', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Endpoint to handle the status update
app.post('/status', async (req, res) => {
  const { projectName, status } = req.body;

  try {
    const project = await Project.findOneAndUpdate(
      { projectName },
      { status },
      { new: true, upsert: true }
    );

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3007, () => {
  console.log('Server started on port 3007');
});
