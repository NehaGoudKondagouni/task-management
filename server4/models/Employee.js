const mongoose = require('mongoose');

const assignSchema = new mongoose.Schema({
  employeeId: String,
  taskName: String,
  taskId: Number,
  deadline: Date,
});

const assign1 = mongoose.model('employees', assignSchema);

module.exports = assign1;