const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectName: String,
  status: String,
});

const Project = mongoose.model('projects', projectSchema);

module.exports = Project;
