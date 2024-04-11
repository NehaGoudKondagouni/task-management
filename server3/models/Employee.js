const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  employeeId: String,
  taskName: String,
  taskId: Number,
  deadline: Date,
});

const Task = mongoose.model('employees', taskSchema);

module.exports = Task;
